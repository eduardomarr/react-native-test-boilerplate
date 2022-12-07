import React, { useEffect } from "react";
import { RepositoryCard } from "../../../components/RepositoryCard";
import { Repository } from "../../../context/repository";
import { useRepository } from "../../../hooks/useRepository";
import { Container, RepositoryList } from "./styles";

const Home = () => {
  const { getUserRepositories, repositories } = useRepository();

  useEffect(() => {
    getUserRepositories("eduardomarr");
  }, []);

  const notFavorite = repositories.filter(
    (item: Repository) => item.favorite === false
  );

  return (
    <Container>
      <RepositoryList>
        {notFavorite.map((item: Repository) => (
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
