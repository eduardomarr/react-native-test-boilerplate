import { useRoute } from "@react-navigation/native";
import React, { useEffect, useMemo } from "react";
import { Linking } from "react-native";
import { Repository } from "../../../context/repository";
import { useRepository } from "../../../hooks/useRepository";
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
} from "./styles";

const Details = () => {
  const { addFavoriteRepository, repositories, removeFavoriteRepository } =
    useRepository();
  const route = useRoute();

  const { repositoryId } = route.params;

  function handleOpenExternalUrl(url: string) {
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  }

  const selectedRepository = useMemo(() => {
    const selected = repositories.find(
      (item: Repository) => item.id === repositoryId
    );
    return selected!;
  }, [repositories]);

  function handleToggleFavorite(isFavorite: boolean) {
    if (isFavorite) {
      removeFavoriteRepository(selectedRepository);
    } else {
      addFavoriteRepository(selectedRepository);
    }
  }

  return (
    <Container>
      <Content>
        <Title>
          {selectedRepository.owner.name}/
          <BoldTitle>{selectedRepository.name}</BoldTitle>
        </Title>
        <Description>{selectedRepository.description}</Description>
        <LanguageContainer>
          <LanguageColor />
          <Language>{selectedRepository.language}</Language>
        </LanguageContainer>
      </Content>

      <Footer>
        <NavigateButton
          onPress={() => handleOpenExternalUrl(selectedRepository.url)}
        >
          <NavigateTitle>Ver repositório</NavigateTitle>
          <NavigateIcon name="link-2" size={20} />
        </NavigateButton>

        <FooterButton
          isFavoriteButton={selectedRepository.favorite}
          onPress={() => handleToggleFavorite(selectedRepository.favorite)}
        >
          <FooterButtonTitle>
            {selectedRepository.favorite ? "Desfavoritar" : "Favoritar"}
          </FooterButtonTitle>
          <FooterIcon
            name={selectedRepository.favorite ? "star-outline" : "star"}
            size={20}
          />
        </FooterButton>
      </Footer>
    </Container>
  );
};

export default Details;
