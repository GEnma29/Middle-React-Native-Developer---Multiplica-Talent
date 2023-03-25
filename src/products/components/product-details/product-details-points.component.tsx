import React from 'react';
import {View} from 'react-native';
import {Text, makeStyles} from '@rneui/themed';
import {currencyFormat} from '@src/utils/currency-format.utils';

const ProductDetailsPointsComponent: React.FC<{
  points: number;
}> = ({points}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>Con esta compra acumulaste:</Text>
      <Text style={styles.pointsText}>{currencyFormat(points)} puntos</Text>
    </View>
  );
};

export default ProductDetailsPointsComponent;

const useStyles = makeStyles((theme: any) => ({
  container: {
    marginTop: 20,
  },
  subTitle: {
    color: '#9B9898',
    fontWeight: '800',
    fontSize: 14,
  },
  pointsText: {
    marginTop: 32,
    color: '#000000',
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 32.78,
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
