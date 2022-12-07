import React, { useEffect, useState } from 'react';
import { useModalize } from 'react-native-modalize';
import {
  Container,
  ModalButtonContainer,
  ModalButton,
  Title,
  Input,
} from './styles';
import theme from '../../styles/theme';
import { useRepository } from '../../hooks/useRepository';

type Props = {
  visible: boolean;
  onClose: () => void;
};

function UserSelectionModal({ visible, onClose }: Props) {
  const { setRepositoryOwner, getUserRepositories } = useRepository();
  const [text, setText] = useState('');

  const { ref, open, close } = useModalize();

  useEffect(() => {
    if (visible) {
      open();
    } else {
      close();
    }
  }, [visible]);

  function handleSetNewOwner() {
    setRepositoryOwner(text);
    getUserRepositories(text);
    onClose();
    setText('');
  }

  function handleCloseModal() {
    onClose();
    setText('');
  }

  return (
    <Container ref={ref} onClose={onClose}>
      <Title>Alterar usuário selecionado</Title>
      <Input
        label="Nome do usuário"
        value={text}
        onChangeText={(e) => setText(e)}
        underlineColor={theme.colors.BLACK}
        activeUnderlineColor={theme.colors.BLACK}
        outlineColor={theme.colors.BLACK}
        activeOutlineColor={theme.colors.BLACK}
        textColor={theme.colors.BLACK}
        style={{ backgroundColor: theme.colors.GRAY_2 }}
      />
      <ModalButtonContainer>
        <ModalButton
          mode="text"
          textColor={theme.colors.BLUE}
          onPress={() => handleCloseModal()}
        >
          Cancelar
        </ModalButton>
        <ModalButton
          mode="contained"
          buttonColor={theme.colors.BLUE}
          onPress={() => handleSetNewOwner()}
        >
          Salvar
        </ModalButton>
      </ModalButtonContainer>
    </Container>
  );
}

export default UserSelectionModal;
