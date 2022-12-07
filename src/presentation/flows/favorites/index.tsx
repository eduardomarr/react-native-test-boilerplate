import React, { useCallback, useState } from "react";
import { RepositoryCard } from "../../components/RepositoryCard";
import { RepositoryTypes } from "../../context/repository";
import { Container, RepositoryList } from "./styles";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const Favorites = () => {
  const [favoritesRepositories, setFavoritesRepositories] = useState([]);

  const favoritesStorageKey = "@wefit:favorites";

  useFocusEffect(
    useCallback(() => {
      async function getData() {
        const storagedFavorites = await AsyncStorage.getItem(
          favoritesStorageKey
        );

        if (storagedFavorites) {
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
        {favoritesRepositories.map((item: RepositoryTypes) => (
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
