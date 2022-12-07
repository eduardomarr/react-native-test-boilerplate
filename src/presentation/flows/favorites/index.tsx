import React, { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { RepositoryCard } from '../../components/RepositoryCard';
import { RepositoryTypes } from '../../context/repository';
import { Container, InfoMessage, RepositoryList } from './styles';

function Favorites() {
  const [favoritesRepositories, setFavoritesRepositories] = useState([]);

  const favoritesStorageKey = '@wefit:favorites';

  useFocusEffect(
    useCallback(() => {
      async function getData() {
        const storagedFavorites = await AsyncStorage.getItem(
          favoritesStorageKey,
        );

        if (storagedFavorites) {
          setFavoritesRepositories(JSON.parse(storagedFavorites));
        }
      }

      getData();

      return () => {};
    }, []),
  );

  return (
    <Container>
      <RepositoryList>
        {favoritesRepositories.length === 0 ? (
          <InfoMessage>Não há repositórios salvos</InfoMessage>
        ) : (
          favoritesRepositories.map((item: RepositoryTypes) => (
            <RepositoryCard
              repository={item}
              key={item.id}
              isFavoriteScreen
            />
          ))
        )}
      </RepositoryList>
    </Container>
  );
}

export default Favorites;
