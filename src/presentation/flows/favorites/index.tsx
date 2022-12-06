import React, { useContext } from "react";
import { RepositoryCard } from "../../components/RepositoryCard";
import { Repository, RepositoryContext } from "../../context/repository";
import { Container, RepositoryList } from "./styles";

const Favorites = () => {
  const { favorites } = useContext(RepositoryContext);

  return (
    <Container>
      <RepositoryList>
        {favorites.map((item: Repository) => (
          <RepositoryCard repository={item} key={item.id} />
        ))}
      </RepositoryList>
    </Container>
  );
};

export default Favorites;
