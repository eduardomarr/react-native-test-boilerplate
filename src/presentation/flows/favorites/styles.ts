import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_2};
`;

export const RepositoryList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 16px;
`;

export const InfoMessage = styled.Text`
  align-self: center;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.GRAY_5};
  font-size: ${RFValue(16)}px;
  margin-top: ${RFValue(32)}px;
`;
