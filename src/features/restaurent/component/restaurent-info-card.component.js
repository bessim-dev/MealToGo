import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import openNow from "../../../../assets/openNow";
import { Text } from "../../../components/typography/typography";
import {
  Icons,
  Info,
  StatusSection,
  StyledCard,
  StyledCardCover,
  StyledImage,
  StyledRating,
} from "./restaurent-info-card.styles";

export const RestaurentInfoCard = ({ restaurant = {} }) => {
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
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <StyledCard elevation={5}>
      <StyledCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Icons>
          <StyledRating>
            {ratingArray.map((el, i) => (
              <SvgXml xml={star} width={20} height={20} key={i} />
            ))}
          </StyledRating>
          <StatusSection>
            {isClosedTemporarily && (
              <Text variant="error">Temporarily Closed</Text>
            )}
            {isOpenNow && <SvgXml xml={openNow} width={20} height={20} />}
            <StyledImage source={{ uri: icon }} />
          </StatusSection>
        </Icons>

        <Text variant="caption">{address}</Text>
      </Info>
    </StyledCard>
  );
};
