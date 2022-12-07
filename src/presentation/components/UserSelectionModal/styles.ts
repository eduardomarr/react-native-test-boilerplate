import styled from "styled-components/native";
import { Modalize } from "react-native-modalize";
import { RFValue } from "react-native-responsive-fontsize";

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
`;
