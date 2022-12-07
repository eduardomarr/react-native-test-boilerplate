import { GestureHandlerRootView } from 'react-native-gesture-handler';
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

type RepositoryCardProps = {
  repository: RepositoryTypes;
  isFavoriteScreen: boolean;
};

export function RepositoryCard({
  repository,
  isFavoriteScreen,
}: RepositoryCardProps) {
  const { addFavoriteRepository } = useRepository();

  const navigation = useNavigation();

  return (
    <Container
      onPress={() => navigation.navigate('Details', {
        repository,
      })}
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
              <FavoriteButton onPress={() => addFavoriteRepository(repository)}>
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
