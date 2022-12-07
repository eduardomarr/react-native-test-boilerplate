import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { isIphoneX } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.GRAY_2};

  justify-content: space-between;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.WHITE};
  padding: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.GRAY_10};
`;

export const BoldTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.BOLD};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.GRAY_10};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.GRAY_4};

  margin: 16px 0;
`;

export const LanguageContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LanguageColor = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.RED};
`;

export const Language = styled.Text`
  margin-left: 8px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.GRAY_4};
`;

export const Footer = styled.View`
  background-color: ${({ theme }) => theme.colors.WHITE};
  padding: 16px 16px 0px 16px;
  align-items: center;

  padding-bottom: ${isIphoneX() ? "32px" : "16px"};
`;

export const NavigateButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
  margin-bottom: 8px;
`;

export const NavigateTitle = styled.Text`
  color: ${({ theme }) => theme.colors.BLUE};
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  font-size: ${RFValue(15)}px;
  margin-right: 8px;
  text-transform: uppercase;
`;

export const NavigateIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.BLUE};
`;

export const FooterButton = styled(RectButton)`
  background: ${({ theme }) => theme.colors.YELLOW_2};
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 8px 0;
  border-radius: 4px;

  shadow-color: ${({ theme }) => theme.colors.BLACK};
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 2;
`;

export const FooterButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.MEDIUM};
  font-size: ${RFValue(15)}px;
  margin-right: 8px;
  text-transform: uppercase;
`;

export const FooterIcon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.BLACK};
`;
