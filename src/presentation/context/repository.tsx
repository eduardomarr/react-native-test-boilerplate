
import React, { createContext, useState } from "react";
import UserSelectionModal from "../components/UserSelectionModal";

type Children = { children: JSX.Element };

type Repository = {
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
  {} as RepositoryContextData,
);

export const RepositoryProvider = ({ children }: Children) => {
  const [showModal, setShowModal] = useState(false);
  const [favorites, setFavorites] = useState<Repository[]>([]);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [repositoryOwner, setRepositoryOwner] = useState("appswefit");

  const toggleUserSelectionModal = () => setShowModal((value) => !value);

  const addFavoriteRepository = async (repository: Repository) => {
    // TODO
  };

  const removeFavoriteRepository = async (repository: Repository) => {
    // TODO
  };

  const getUserRepositories = async (user: string) => {
    // TODO
  };

  return (
    <RepositoryContext.Provider
      value={{
        repositories,
        favorites,
        getUserRepositories,
        toggleUserSelectionModal,
        addFavoriteRepository,
        removeFavoriteRepository
      }}
    >
      {children}
      <UserSelectionModal visible={showModal} onClose={() => setShowModal(false)} />
    </RepositoryContext.Provider>
  );
};

