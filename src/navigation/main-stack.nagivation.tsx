import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@src/screens/home.screen';
import ProductDetails from '@src/screens/product-details.screen';
import {Product} from '@src/products/models/products.models';
import HeaderProductFragment from '@src/products/components/layout/header-product.fragment';

const Stack = createNativeStackNavigator<RootStackParamList>();
export type RootStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: {
    product: Product;
  };
};
const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeScreen"
          component={Home}
        />
        <Stack.Screen
          name="DetailsScreen"
          options={({route}) => ({
            headerTitle: () => (
              <HeaderProductFragment title={route.params.product.product} />
            ),
            headerStyle: {
              backgroundColor: '#CFD6FF',
              marginBottom: 20,
            },
            title: route.params.product.product,
            headerTitleAlign: 'left',
            headerBackVisible: false,
            headerBackButtonMenuEnabled: false,
          })}
          component={ProductDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
