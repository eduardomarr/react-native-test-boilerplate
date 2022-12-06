import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_1};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.BOLD};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.BLACK};
`;