import styled from 'styled-components/native';
import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.GRAY_1};
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 400px;
  height: 400px;
`;
