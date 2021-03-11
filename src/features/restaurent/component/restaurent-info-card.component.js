import React from "react";
import styled from "styled-components/native";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import openNow from "../../../../assets/openNow";
const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const StyledRating = styled(View)`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  flex-direction: row;
`;
const StyledCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Icons = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;
const ClosedText = styled(Text)`
  color: ${(props) => props.theme.colors.text.error};
  margin-left: ${(props) => props.theme.space[4]};
`;
const StyledImage = styled(Image)`
  width: 15px;
  height: 15px;
`;
const StatusSection = styled(View)`
  flex-direction: row;
`;
export const RestaurentInfoCard = ({ restaurent = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurent;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <StyledCard elevation={5}>
      <StyledCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Icons>
          <StyledRating>
            {ratingArray.map((el, i) => (
              <SvgXml xml={star} width={20} height={20} key={i} />
            ))}
          </StyledRating>
          <StatusSection>
            {isClosedTemporarily && <ClosedText>Temporarily Closed</ClosedText>}
            {isOpenNow && <SvgXml xml={openNow} width={20} height={20} />}
            <StyledImage source={{ uri: icon }} />
          </StatusSection>
        </Icons>

        <Address>{address}</Address>
      </Info>
    </StyledCard>
  );
};
