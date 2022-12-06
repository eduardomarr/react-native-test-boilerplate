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

interface RepositoryCardProps {}

export function RepositoryCard() {
  return (
    <Container>
      <Header>
        <Title>
          appswefit/<BoldTitle>create-react-app</BoldTitle>
        </Title>
        <Logo source={WeFitLogo} />
      </Header>
      <LineSpacer />
      <Content>
        <Description>
          Yarn Workspaces Monorepo support for Create-React-App / React-Scripts.
        </Description>
        <Footer>
          <GestureHandlerRootView>
            <FavoriteButton onPress={() => console.log("fav")}>
              <FavoriteIcon name="star" />
              <FavoriteButtonTitle>Favoritar</FavoriteButtonTitle>
            </FavoriteButton>
          </GestureHandlerRootView>

          <FavoritesContainer>
            <FavoriteIcon name="star" />
            <Favorites>0</Favorites>
          </FavoritesContainer>

          <LanguageContainer>
            <LanguageColor />
            <Language>Typescript</Language>
          </LanguageContainer>
        </Footer>
      </Content>
    </Container>
  );
}
