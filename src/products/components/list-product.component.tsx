import React from 'react';
import {View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {makeStyles, Text} from '@rneui/themed';
import ProductItemComponent from './product-item.component';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@src/navigation/main-stack.nagivation';
import FilterButtonsProduct from './filter-buttons.product';
import {useGetProducts} from '../services/products.services';

export interface BoatInformationProps {
  navigation: StackNavigationProp<RootStackParamList, 'HomeScreen'>;
}

const ListOfProducts: React.FC<BoatInformationProps> = ({navigation}) => {
  const styles = useStyles();
  const {ListProducts, isLoading, setListFilter, listFilter} = useGetProducts();
  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>TUS MOVIMIENTOS </Text>
      <View style={styles.containerList}>
        {!isLoading && (
          <FlashList
            data={ListProducts}
            renderItem={({item, index}) => (
              <ProductItemComponent
                navigation={navigation}
                index={index}
                product={item}
              />
            )}
          />
        )}
      </View>
      <FilterButtonsProduct
        setListFilter={setListFilter}
        listFilter={listFilter}
      />
    </View>
  );
};

export default ListOfProducts;

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '100%',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 20,
  },
  containerList: {
    backgroundColor: theme?.colors.white,
    padding: 10,
    width: '100%',
    height: 350,
    borderRadius: 20,
    overflow: 'hidden',
  },
}));
