import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button} from '@rneui/themed';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@src/navigation/main-stack.nagivation';
import LayoutProductDetails from '@src/products/components/layout/layout-produt-details.layout';
import ProductDetailsInfo from '@src/products/components/product-details/product-details-info.component';
import ProductDetailsPointsComponent from '@src/products/components/product-details/product-details-points.component';
import ProductDetailsImageComponent from '@src/products/components/product-details/product-details-image.component';

export interface ProductDetailsProps {
  navigation: StackNavigationProp<RootStackParamList, 'DetailsScreen'>;
  route: RouteProp<RootStackParamList, 'DetailsScreen'>;
}
const ProductDetails: React.FC<ProductDetailsProps> = ({navigation, route}) => {
  const {product} = route.params;
  return (
    <SafeAreaView style={{height: '100%', width: '100%', marginTop: 20}}>
      <LayoutProductDetails
        imageProductDetails={
          <ProductDetailsImageComponent url={product.image} />
        }
        infoProductDetails={<ProductDetailsInfo date={product?.createdAt} />}
        pointsProductDetails={
          <ProductDetailsPointsComponent points={product.points} />
        }
        buttonProductDetails={
          <Button onPress={() => navigation.goBack()} title="Aceptar" />
        }
      />
    </SafeAreaView>
  );
};

export default ProductDetails;
