import React, { useEffect } from "react";
import { useModalize } from "react-native-modalize";
import {
  Container, Text
} from "./styles";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const UserSelectionModal = ({ visible, onClose }: Props) => {
  const { ref, open, close } = useModalize();

  useEffect(() => {
    visible ? open() : close();
  }, [visible]);

  return (
    <Container ref={ref} onClose={onClose}>
      <Text>Modal de Seleção de Usuário</Text>
    </Container>
  );
};

export default UserSelectionModal;
