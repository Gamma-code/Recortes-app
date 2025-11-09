
import React, { useState, createContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReportFeedScreen from './screen/FeedScreen';
import AddReportScreen from './screen/AddReportScreen';
//import LoginScreen from './screen/LoginScreen';
import { ReportsProvider } from "./Save/ReportSave";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ReportsProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AddReportFeed">
          <Stack.Screen name="AddReportFeed" component={ReportFeedScreen} />
          <Stack.Screen name="AddReport" component={AddReportScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </ReportsProvider>
  );
}
