import styled from 'styled-components/native';
import { Modalize } from 'react-native-modalize';
import { RFValue } from 'react-native-responsive-fontsize';
import { Button, TextInput } from 'react-native-paper';
import { isIphoneX } from 'react-native-iphone-x-helper';
import styleTheme from '../../styles/theme';

export const Container = styled(Modalize).attrs({
  adjustToContentHeight: true,
  handlePosition: 'inside',
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
  margin: 10px 0;
`;

export const Input = styled(TextInput).attrs({
  autoCapitalize: 'none',
})`
  margin-bottom: 10px;
`;

export const ModalButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  padding-bottom: ${isIphoneX() ? '8px' : '4px'};

  width: 100%;
`;

export const ModalButton = styled(Button).attrs({
  uppercase: true,
  labelStyle: {
    fontWeight: 'bold',
    fontFamily: styleTheme.fonts.MEDIUM,
  },
  contentStyle: {
    height: 42,
    width: RFValue(140),
    flex: 1,
  },
})`
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
`;
