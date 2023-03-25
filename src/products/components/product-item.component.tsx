import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, makeStyles, Image} from '@rneui/themed';
import {Product} from '../models/products.models';
import ArrowIcon from '@src/icons/arrow.icon';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@src/navigation/main-stack.nagivation';
import {getParamsDate} from '@src/utils/date.utilities';

export interface BoatInformationProps {
  navigation: StackNavigationProp<RootStackParamList, 'HomeScreen'>;
  index: number;
  product: Product;
}

const ProductItemComponent: React.FC<BoatInformationProps> = ({
  navigation,
  index,
  product,
}) => {
  const {
    points,
    product: productName,
    image,
    createdAt,
    is_redemption,
  } = product;
  // dynamic styles
  const styles = useStyles(index);
  const symbolColor = is_redemption ? '#FF0000' : '#00B833';
  // navigate
  /* const navigation = useNavigation();*/
  const {day, month, year} = getParamsDate(createdAt);
  const goToProductDetails = () => {
    navigation.navigate('DetailsScreen', {product});
  };
  return (
    <TouchableOpacity onPress={goToProductDetails} style={styles.container}>
      <View style={styles.containerPoints}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.containerProduct}>
          <Text style={styles.productName}>{productName}</Text>
          <Text>
            {day} de {month},{year}
          </Text>
        </View>
      </View>
      <View style={styles.containerPoints}>
        <Text style={{color: symbolColor}}>{is_redemption ? '-' : '+'}</Text>
        <Text>{points}</Text>
      </View>
      <View style={styles.containerPoints}>
        <ArrowIcon />
      </View>
    </TouchableOpacity>
  );
};

export default ProductItemComponent;

const useStyles = makeStyles((theme, index: number) => ({
  container: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
    marginTop: index === 0 ? 10 : 0,
  },
  image: {
    aspectRatio: 1,
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  containerProduct: {
    width: 144,
    marginLeft: 16,
    marginRight: 16,
  },
  productName: {
    fontWeight: '800',
    color: '#000000',
    fontSize: 14,
  },
  containerPoints: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
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
