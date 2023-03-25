import React from 'react';
import {SafeAreaView} from 'react-native';
import {makeStyles} from '@rneui/base';
import HomeLayoutComponent from '@src/home/components/layout/home-layout.component';
import GreetingComponent from '@src/home/components/greeting.component';
import PointsComponent from '@src/home/components/points.component';
import ListOfProducts from '@src/products/components/list-product.component';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@src/navigation/main-stack.nagivation';
import {useGetProducts} from '@src/products/services/products.services';

export interface BoatInformationProps {
  navigation: StackNavigationProp<RootStackParamList, 'HomeScreen'>;
}
const HomeScreen: React.FC<BoatInformationProps> = ({navigation}) => {
  const styles = useStyles();

  const {totalAmount} = useGetProducts();

  return (
    <SafeAreaView style={styles.container}>
      <HomeLayoutComponent
        homeTab={<GreetingComponent />}
        balanceComponent={<PointsComponent points={totalAmount || 0} />}
        listOfCoins={<ListOfProducts navigation={navigation} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const useStyles = makeStyles((theme: any) => ({
  container: {
    backgroundColor: theme?.colors?.backgroundGray,
  },
}));
