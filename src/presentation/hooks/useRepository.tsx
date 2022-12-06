import { useContext } from "react";
import { RepositoryContext, RepositoryContextData } from "../context/repository";

export const useRepository = (): RepositoryContextData => {
  const context = useContext(RepositoryContext);

  if (!context) {
    throw new Error('useRepository must be used within RepositoryProvider');
  }

  return context;
}
