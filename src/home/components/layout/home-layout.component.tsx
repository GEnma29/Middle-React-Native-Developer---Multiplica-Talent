import React from 'react';
import {View} from 'react-native';
import {makeStyles} from '@rneui/themed';
import FilterButtonsProduct from '@src/products/components/filter-buttons.product';

const HomeLayoutComponent: React.FC<{
  homeTab: React.ReactNode;
  balanceComponent?: React.ReactNode;
  listOfCoins: React.ReactNode;
}> = ({homeTab, balanceComponent, listOfCoins}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>{homeTab}</View>
      <View style={styles.balanceContainer}>{balanceComponent}</View>
      <View style={styles.listOfCoinsContainer}>{listOfCoins}</View>
      <FilterButtonsProduct />
    </View>
  );
};
const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: '100%',
  },
  tabContainer: {
    paddingTop: 27,
  },
  balanceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  listOfCoinsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
}));
export default HomeLayoutComponent;
