import React from "react";
import { RepositoryCard } from "../../../components/RepositoryCard";
import { Container, RepositoryList } from "./styles";

const Home = () => {
  return (
    <Container>
      <RepositoryList>
        <RepositoryCard />
        <RepositoryCard />
      </RepositoryList>
    </Container>
  );
};

export default Home;
