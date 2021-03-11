import React from "react";
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurentInfoCard } from "../component/restaurent-info-card.component";

const StyledContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const StyledNavBar = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const StyledList = styled(View)`
  flex-grow: 1;
  padding: ${(props) => props.theme.space[3]};
`;
export const RestaurentsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <StyledContainer>
        <StyledNavBar>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </StyledNavBar>
        <StyledList>
          <RestaurentInfoCard />
        </StyledList>
      </StyledContainer>
      <ExpoStatusBar style="auto" />
    </>
  );
};
