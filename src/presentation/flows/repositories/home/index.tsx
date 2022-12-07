import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { RepositoryCard } from "../../../components/RepositoryCard";
import { RepositoryTypes } from "../../../context/repository";
import { useRepository } from "../../../hooks/useRepository";
import { Container, RepositoryList } from "./styles";

const Home = () => {
  const { getUserRepositories, repositories, repositoryOwner } =
    useRepository();

  useEffect(() => {
    getUserRepositories(repositoryOwner);
  }, []);

  const notFavorite = repositories.filter(
    (item: RepositoryTypes) => item.favorite === false
  );

  return (
    <Container>
      <RepositoryList>
        {notFavorite.map((item: RepositoryTypes) => (
          <RepositoryCard
            repository={item}
            key={item.id}
            isFavoriteScreen={false}
          />
        ))}
      </RepositoryList>
    </Container>
  );
};

export default Home;
