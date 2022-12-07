import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.WHITE};
  padding: 12px 16px;
  border-radius: 4px;
  margin-bottom: 16px;

  shadow-color: ${({ theme }) => theme.colors.BLACK};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;

  elevation: 5;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.BLACK};
  line-height: 14.52px;
`;

export const BoldTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.BOLD};
  color: ${({ theme }) => theme.colors.BLACK};
  line-height: 14.52px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: ${RFValue(29)}px;
  width: ${RFValue(29)}px;
  border-radius: 50px;
  align-self: center;
`;

export const LineSpacer = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.GRAY_3};
  opacity: 0.9;
  margin: 16px 0;
`;

export const Content = styled.View``;

export const Description = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.GRAY_4};
  line-height: 14.52px;
  margin-bottom: 16px;
`;
export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FavoriteButton = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.YELLOW_1};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 4px;
  padding: 8px 12px;
`;

export const FavoriteButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.YELLOW_2};
  margin-left: 12px;
  font-family: ${({ theme }) => theme.fonts.BOLD};
`;

export const FavoriteIcon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.YELLOW_2};
`;

export const FavoritesContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Favorites = styled.Text`
  margin-left: 8px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.GRAY_4};
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
