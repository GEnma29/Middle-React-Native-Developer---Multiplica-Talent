import React from 'react';
import {SafeAreaView} from 'react-native';
// components
import HomeLayoutComponent from '@src/home/components/layout/home-layout.component';
import UserTabHomeComponent from '@src/home/components/user/user-tab-home.component';
import ListOfCoinsComponent from '@src/home/components/coins/list-of-coins.component';

const ListCoins = () => {
  return (
    <SafeAreaView>
      <HomeLayoutComponent
        homeTab={
          <UserTabHomeComponent
            name="Enmanuel"
            imgUrl="https://bit.ly/ryan-florence"
          />
        }
        listOfCoins={<ListOfCoinsComponent />}
      />
    </SafeAreaView>
  );
};

export default ListCoins;
