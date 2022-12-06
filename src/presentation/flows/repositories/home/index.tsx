import React, { useCallback, useContext, useEffect, useMemo } from "react";
import { RepositoryCard } from "../../../components/RepositoryCard";
import { Repository, RepositoryContext } from "../../../context/repository";
import { Container, RepositoryList } from "./styles";

const Home = () => {
  const { getUserRepositories, repositories } = useContext(RepositoryContext);

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
          <RepositoryCard repository={item} key={item.id} />
        ))}
      </RepositoryList>
    </Container>
  );
};

export default Home;
