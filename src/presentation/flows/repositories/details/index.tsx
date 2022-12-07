import { useRoute } from "@react-navigation/native";
import React from "react";
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
  NavigateContainer,
  NavigateButton,
  FooterButton,
  FooterButtonTitle,
  FooterIcon,
  NavigateTitle,
  NavigateIcon,
} from "./styles";

const Details = () => {
  const route = useRoute();

  const { owner, name, description, language, url } = route.params;

  return (
    <Container>
      <Content>
        <Title>
          {owner}/<BoldTitle>{name}</BoldTitle>
        </Title>
        <Description>{description}</Description>
        <LanguageContainer>
          <LanguageColor />
          <Language>{language}</Language>
        </LanguageContainer>
      </Content>

      <Footer>
        <NavigateButton>
          <NavigateTitle>Ver repositório</NavigateTitle>
          <NavigateIcon name="link-2" size={20} />
        </NavigateButton>
        <FooterButton>
          <FooterButtonTitle>Favoritar</FooterButtonTitle>
          <FooterIcon name="star" size={20} />
        </FooterButton>
      </Footer>
    </Container>
  );
};

export default Details;
