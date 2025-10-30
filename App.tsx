import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa tus pantallas
import ReportFeedScreen from './screen/FeedScreen';
import AddReportScreen from './screen/AddReportScreen';
//import LoginScreen from './screen/LoginScreen';

// Crea el stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ReportFeed"
        screenOptions={{
          headerShown: false, // Oculta el encabezado
        }}
      >
        
        <Stack.Screen name="ReportFeed" component={ReportFeedScreen} />
        <Stack.Screen name="AddReport" component={AddReportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
