import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Linking } from 'react-native';
import { RepositoryTypes } from '../../../context/repository';
import { useRepository } from '../../../hooks/useRepository';
import {
  Container,
  Content,
  Description,
  Title,
  BoldTitle,
  Language,
  LanguageColor,
  LanguageContainer,
  Footer,
  NavigateButton,
  FooterButton,
  FooterButtonTitle,
  FooterIcon,
  NavigateTitle,
  NavigateIcon,
} from './styles';

function Details() {
  const { addFavoriteRepository, removeFavoriteRepository } = useRepository();
  const route = useRoute();

  const { repository } = route.params;

  const [selectedRepository, setSelectedRepository] = useState<RepositoryTypes>(repository);

  function handleOpenExternalUrl(url: string) {
    Linking.openURL(url).catch((err) => console.error('Não foi possível abrir o repositório', err));
  }

  function handleToggleFavorite(isFavorite: boolean) {
    if (isFavorite) {
      removeFavoriteRepository(repository);
      setSelectedRepository((prevState) => ({
        ...prevState,
        favorite: false,
      }));
    } else {
      addFavoriteRepository(repository);
      setSelectedRepository((prevState) => ({
        ...prevState,
        favorite: true,
      }));
    }
  }

  return (
    <Container>
      <Content>
        <Title>
          {selectedRepository.owner.name}
          /
          <BoldTitle>{selectedRepository.name}</BoldTitle>
        </Title>
        <Description>{selectedRepository.description}</Description>
        {selectedRepository.language && (
          <LanguageContainer>
            <LanguageColor />
            <Language>{selectedRepository.language}</Language>
          </LanguageContainer>
        )}
      </Content>

      <Footer>
        <NavigateButton onPress={() => handleOpenExternalUrl(selectedRepository.url)}>
          <NavigateTitle>Ver repositório</NavigateTitle>
          <NavigateIcon name="link-2" size={20} />
        </NavigateButton>

        <FooterButton
          isFavoriteButton={selectedRepository.favorite}
          onPress={() => handleToggleFavorite(selectedRepository.favorite)}
        >
          <FooterButtonTitle>{selectedRepository.favorite ? 'Desfavoritar' : 'Favoritar'}</FooterButtonTitle>
          <FooterIcon name={selectedRepository.favorite ? 'star-outline' : 'star'} size={20} />
        </FooterButton>
      </Footer>
    </Container>
  );
}

export default Details;
