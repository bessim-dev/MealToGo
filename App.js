import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestaurentsScreen } from "./src/features/restaurent/screens/restaurents.screens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SettingsScreen } from "./src/features/settings/settings.screen";
import { MapScreen } from "./src/features/map/map.screen";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from "./src/services/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

const ICONS_TYPES = {
  Restaurants: "md-restaurant",
  Settings: "md-settings",
  Map: "md-map",
};
const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    return (
      <Ionicons name={ICONS_TYPES[route.name]} size={size} color={color} />
    );
  },
});

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurentsScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <MyTabs />
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
};
export default App;
