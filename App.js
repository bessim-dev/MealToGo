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
        <RestaurentsScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
};
export default App;
