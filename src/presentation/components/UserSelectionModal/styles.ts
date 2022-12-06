import styled from "styled-components/native";
import { Modalize } from "react-native-modalize";


export const Container = styled(Modalize).attrs({
  adjustToContentHeight: true,
  handlePosition: "inside",
  childrenStyle: {
    padding: 24,
  },
})`
  background-color: ${({ theme }) => theme.colors.GRAY_2};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.BOLD};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.BLACK};
`;