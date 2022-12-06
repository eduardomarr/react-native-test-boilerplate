import React, { useCallback, useContext, useEffect, useMemo } from "react";
import { RepositoryCard } from "../../../components/RepositoryCard";
import { Repository, RepositoryContext } from "../../../context/repository";
import { Container, RepositoryList } from "./styles";

const Home = () => {
  const { getUserRepositories, repositories } = useContext(RepositoryContext);

  useEffect(() => {
    getUserRepositories("eduardomarr");
  }, []);

  return (
    <Container>
      <RepositoryList>
        {repositories.map((item: Repository) => (
          <RepositoryCard repository={item} />
        ))}
      </RepositoryList>
    </Container>
  );
};

export default Home;
