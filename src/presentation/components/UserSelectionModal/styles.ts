import styled from "styled-components/native";
import { Modalize } from "react-native-modalize";
import { RFValue } from "react-native-responsive-fontsize";
import { Button, TextInput } from "react-native-paper";

export const Container = styled(Modalize).attrs({
  adjustToContentHeight: true,
  handlePosition: "inside",
  childrenStyle: {
    padding: 24,
  },
})`
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR_ROBOTO};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.BLACK};
  margin-bottom: 10px;
`;

export const Input = styled(TextInput)`
  margin-bottom: 10px;
`;

export const ModalButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ModalButton = styled(Button).attrs({
  uppercase: true,
})`
  border-radius: 4px;
  /* padding: 0 ${RFValue(32)}px; */
`;
