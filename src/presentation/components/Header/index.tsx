import React from "react";
import { Container, Text, Button, SettingsIcon } from "./styles";

type Props = {
  title: string;
  onPress: () => void;
};

const Header = ({ title, onPress }: Props) => {
  return (
    <Container>
      <Text>{title}</Text>

      <Button onPress={onPress}>
        <SettingsIcon />
      </Button>
    </Container>
  );
};

export default Header;