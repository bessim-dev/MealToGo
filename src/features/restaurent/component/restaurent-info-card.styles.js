import styled from "styled-components/native";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
export const StyledRating = styled(View)`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  flex-direction: row;
`;
export const StyledCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
export const Icons = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;
export const StyledImage = styled(Image)`
  width: 15px;
  height: 15px;
  margin-left: ${(props) => props.theme.space[2]};
`;
export const StatusSection = styled(View)`
  flex-direction: row;
`;
