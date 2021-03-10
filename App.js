import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.navBar}>
          <Text>Search</Text>
        </View>
        <View style={styles.body}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  navBar: {
    backgroundColor: "green",
    padding: 16,
  },
  body: {
    flexGrow: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});

export default App;
