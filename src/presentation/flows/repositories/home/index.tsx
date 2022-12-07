import React, { useEffect } from 'react';
import { RepositoryCard } from '../../../components/RepositoryCard';
import { RepositoryTypes } from '../../../context/repository';
import { useRepository } from '../../../hooks/useRepository';
import { Container, RepositoryList, InfoMessage } from './styles';

function Home() {
  const { getUserRepositories, repositories, repositoryOwner } = useRepository();

  useEffect(() => {
    getUserRepositories(repositoryOwner);
  }, []);

  const notFavorite = repositories.filter(
    (item: RepositoryTypes) => item.favorite === false,
  );

  return (
    <Container>
      <RepositoryList>
        {notFavorite.length === 0 ? (
          <InfoMessage>Não há repositórios registrados</InfoMessage>
        ) : (
          notFavorite.map((item: RepositoryTypes) => (
            <RepositoryCard
              repository={item}
              key={item.id}
              isFavoriteScreen={false}
            />
          ))
        )}
      </RepositoryList>
    </Container>
  );
}

export default Home;
