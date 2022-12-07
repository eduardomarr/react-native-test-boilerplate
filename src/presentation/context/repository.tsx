import React, { createContext, useEffect, useState } from "react";
import RepoHttpService from "../../infrastructure/service/RepoHttpService";
import UserSelectionModal from "../components/UserSelectionModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Children = { children: JSX.Element };

export type RepositoryTypes = {
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
  repositories: RepositoryTypes[];
  favorites: RepositoryTypes[];
  getUserRepositories: (user: string) => Promise<void>;
  toggleUserSelectionModal: () => void;
  addFavoriteRepository: (repository: RepositoryTypes) => void;
  removeFavoriteRepository: (repository: RepositoryTypes) => void;
  repositoryOwner: string;
  setRepositoryOwner: (repositoryOwner: string) => void;
};

export const RepositoryContext = createContext<RepositoryContextData>(
  {} as RepositoryContextData
);

export const RepositoryProvider = ({ children }: Children) => {
  const [showModal, setShowModal] = useState(false);
  const [favorites, setFavorites] = useState<RepositoryTypes[]>([]);
  const [repositories, setRepositories] = useState<RepositoryTypes[]>([]);
  const [repositoryOwner, setRepositoryOwner] = useState("appswefit");

  const favoritesStorageKey = "@wefit:favorites";

  const toggleUserSelectionModal = () => setShowModal((value) => !value);

  const addFavoriteRepository = async (repository: RepositoryTypes) => {
    const allRepositories = [...repositories];

    const updatedRepositories = allRepositories.map((item: RepositoryTypes) => {
      if (item.id === repository.id) {
        return {
          ...item,
          favorite: true,
        };
      }
      return item;
    });

    setRepositories(updatedRepositories);

    let allFavorites: RepositoryTypes[] = [];

    const storageFavorites = await AsyncStorage.getItem(favoritesStorageKey);
    repository.favorite = true;

    if (storageFavorites) {
      allFavorites = allFavorites.concat(JSON.parse(storageFavorites));

      const alreadyExists = allFavorites.find(
        (item) => item.id === repository.id
      );

      if (!alreadyExists) {
        allFavorites.push(repository);
      }
    } else {
      allFavorites.push(repository);
    }

    await AsyncStorage.setItem(
      favoritesStorageKey,
      JSON.stringify(allFavorites)
    );

    setFavorites(allFavorites);
  };

  const removeFavoriteRepository = async (repository: RepositoryTypes) => {
    const allRepositories = [...repositories];

    const updatedRepositories = allRepositories.map((item: RepositoryTypes) => {
      if (item.id === repository.id) {
        return {
          ...item,
          favorite: false,
        };
      }
      return item;
    });
    setRepositories(updatedRepositories);

    let allFavorites: RepositoryTypes[] = [];

    const storageFavorites = await AsyncStorage.getItem(favoritesStorageKey);
    repository.favorite = false;

    if (storageFavorites) {
      allFavorites = allFavorites.concat(JSON.parse(storageFavorites));
      allFavorites = allFavorites.filter(
        (item: RepositoryTypes) => item.id !== repository.id
      );
    }

    await AsyncStorage.setItem(
      favoritesStorageKey,
      JSON.stringify(allFavorites)
    );

    setFavorites(allFavorites);
  };

  const getUserRepositories = async (user: string) => {
    const { data } = await RepoHttpService.get(user);

    const repositoryList: RepositoryTypes[] = data.map((item) => ({
      id: item.id,
      name: item.name,
      owner: {
        name: item.owner.login,
        avatar: item.owner.avatar_url,
      },
      description: item.description,
      url: item.html_url,
      language: item.language,
      stars: item.stargazers_count,
      favorite: false,
    }));

    let allRepositories: RepositoryTypes[] = [];

    const storageFavorites = await AsyncStorage.getItem(favoritesStorageKey);

    if (storageFavorites) {
      allRepositories = repositoryList.filter((item1) => {
        return !JSON.parse(storageFavorites).some((item2: RepositoryTypes) => {
          if (item1.id === item2.id) {
            item1.favorite = true;
          }
        });
      });
    } else {
      allRepositories = repositoryList;
    }

    setRepositories(allRepositories);
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
        repositoryOwner,
        setRepositoryOwner,
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
