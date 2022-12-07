import React, { useCallback, useContext, useState } from "react";
import { RepositoryCard } from "../../components/RepositoryCard";
import { Repository, RepositoryContext } from "../../context/repository";
import { Container, RepositoryList } from "./styles";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const Favorites = () => {
  const { favorites } = useContext(RepositoryContext);
  const [favoritesRepositories, setFavoritesRepositories] = useState([]);

  const favoritesStorageKey = "@wefit:favorites";

  useFocusEffect(
    useCallback(() => {
      async function getData() {
        const storagedFavorites = await AsyncStorage.getItem(
          favoritesStorageKey
        );

        if (storagedFavorites) {
          console.log(JSON.parse(storagedFavorites));
          setFavoritesRepositories(JSON.parse(storagedFavorites));
        }
      }

      getData();

      return () => {};
    }, [])
  );

  return (
    <Container>
      <RepositoryList>
        {favoritesRepositories.map((item: Repository) => (
          <RepositoryCard
            repository={item}
            key={item.id}
            isFavoriteScreen={true}
          />
        ))}
      </RepositoryList>
    </Container>
  );
};

export default Favorites;
