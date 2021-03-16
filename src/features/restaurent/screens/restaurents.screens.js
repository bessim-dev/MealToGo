import React, { useContext } from "react";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { RestaurentInfoCard } from "../component/restaurent-info-card.component";
import { RestaurantsContext } from "../../../services/restaurants.context";
import {
  RestaurantList,
  StyledSearchContainer,
} from "./restaurents.screens.styles";
import { Loading } from "../../../components/loading/loading.component";
import { SafeArea } from "../../../components/safeArea/safeArea.component";
import { Search } from "../../../components/search/search.component";

export const RestaurentsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && <Loading />}
      <StyledSearchContainer>
        <Search />
      </StyledSearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurentInfoCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.name.toString()}
      />
    </SafeArea>
  );
};
