import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 const Stack = createNativeStackNavigator();
import React from 'react';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';

export default function Navigation ( ) {
    return(
        <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
        
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Product" component={ProductScreen} />
        
        </Stack.Navigator>
      </NavigationContainer>
    )
}