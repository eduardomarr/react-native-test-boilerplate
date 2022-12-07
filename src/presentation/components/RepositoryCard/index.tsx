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
} from "./styles";

import WeFitLogo from "../../assets/images/WefitLogo.png";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useContext } from "react";
import { Repository, RepositoryContext } from "../../context/repository";

type RepositoryCardProps = {
  repository: Repository;
  isFavoriteScreen: boolean;
};

export function RepositoryCard({
  repository,
  isFavoriteScreen,
}: RepositoryCardProps) {
  const { addFavoriteRepository } = useContext(RepositoryContext);
  return (
    <Container>
      <Header>
        <Title>
          {repository.owner.name}/<BoldTitle>{repository.name}</BoldTitle>
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
            <LanguageColor />
            <Language>{repository.language}</Language>
          </LanguageContainer>
        </Footer>
      </Content>
    </Container>
  );
}
