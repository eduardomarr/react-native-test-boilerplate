import React, { createContext, useEffect, useState } from "react";
import RepoHttpService from "../../infrastructure/service/RepoHttpService";
import UserSelectionModal from "../components/UserSelectionModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Children = { children: JSX.Element };

export type Repository = {
  id: number;
  name: string;
  owner: { name: string; avatar: string };
  description: string;
  url: string;
  language: string;
  stars: number;
  favorite: boolean;
};

export type RepositoryContextData = {
  repositories: Repository[];
  favorites: Repository[];
  getUserRepositories: (user: string) => Promise<void>;
  toggleUserSelectionModal: () => void;
  addFavoriteRepository: (repository: Repository) => void;
  removeFavoriteRepository: (repository: Repository) => void;
};

export const RepositoryContext = createContext<RepositoryContextData>(
  {} as RepositoryContextData
);

export const RepositoryProvider = ({ children }: Children) => {
  const [showModal, setShowModal] = useState(false);
  const [favorites, setFavorites] = useState<Repository[]>([]);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [repositoryOwner, setRepositoryOwner] = useState("appswefit");

  const favoritesStorageKey = "@wefit:favorites";

  const toggleUserSelectionModal = () => setShowModal((value) => !value);

  const addFavoriteRepository = async (repository: Repository) => {
    const allRepositories = [...repositories];

    const updatedRepositories = allRepositories.map((item: Repository) => {
      if (item.id === repository.id) {
        return {
          ...item,
          favorite: true,
        };
      }
      return item;
    });

    const allFavorites = updatedRepositories.filter(
      (item: Repository) => item.favorite === true
    );

    setRepositories(updatedRepositories);

    await AsyncStorage.setItem(
      favoritesStorageKey,
      JSON.stringify(allFavorites)
    );

    setFavorites(allFavorites);
  };

  const removeFavoriteRepository = async (repository: Repository) => {
    // TODO
  };

  const getUserRepositories = async (user: string) => {
    const { data } = await RepoHttpService.get(user);

    const repositoryList = data.map((item) => ({
      id: item.id,
      name: item.name,
      owner: {
        name: item.owner.login,
        avatar: item.owner.avatar_url,
      },
      description: item.description,
      url: item.url,
      language: item.language,
      stars: item.stargazers_count,
      favorite: false,
    }));

    setRepositories(repositoryList);
  };

  return (
    <RepositoryContext.Provider
      value={{
        repositories,
        favorites,
        getUserRepositories,
        toggleUserSelectionModal,
        addFavoriteRepository,
        removeFavoriteRepository,
      }}
    >
      {children}
      <UserSelectionModal
        visible={showModal}
        onClose={() => setShowModal(false)}
      />
    </RepositoryContext.Provider>
  );
};
