import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { RepositoryTypes } from '../../context/repository';

import {
  Container,
  Header,
  Title,
  BoldTitle,
  Logo,
  LineSpacer,
  Content,
  Description,
  Footer,
  FavoriteButton,
  FavoriteButtonTitle,
  Favorites,
  Language,
  FavoriteIcon,
  FavoritesContainer,
  LanguageContainer,
  LanguageColor,
} from './styles';
import { useRepository } from '../../hooks/useRepository';

interface RepositoryCardProps extends RectButtonProps {
  repository: RepositoryTypes;
  isFavoriteScreen: boolean;
}

export function RepositoryCard({
  repository,
  isFavoriteScreen,
  ...rest
}: RepositoryCardProps) {
  const { addFavoriteRepository } = useRepository();

  const navigation = useNavigation();

  return (
    <Container
      onPress={() => navigation.navigate('Details', {
        repository,
      })}
      {...rest}
    >
      <Header>
        <Title>
          {repository.owner.name}
          /
          <BoldTitle>{repository.name}</BoldTitle>
        </Title>
        <Logo source={{ uri: repository.owner.avatar }} />
      </Header>
      <LineSpacer />
      <Content>
        <Description>{repository.description}</Description>
        <Footer>
          {!isFavoriteScreen && (
          <GestureHandlerRootView>
            <FavoriteButton onPress={() => addFavoriteRepository(repository)} {...rest}>
              <FavoriteIcon name="star" />
              <FavoriteButtonTitle>Favoritar</FavoriteButtonTitle>
            </FavoriteButton>
          </GestureHandlerRootView>
          )}

          <FavoritesContainer>
            <FavoriteIcon name="star" />
            <Favorites>{repository.stars}</Favorites>
          </FavoritesContainer>

          <LanguageContainer>
            {repository.language && (
              <>
                <LanguageColor />
                <Language>{repository.language}</Language>
              </>
            )}
          </LanguageContainer>
        </Footer>
      </Content>
    </Container>
  );
}
