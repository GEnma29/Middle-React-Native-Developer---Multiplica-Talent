import React from 'react';
import {View} from 'react-native';
import {Text, makeStyles} from '@rneui/base';
import {getParamsDate} from '@src/utils/date.utilities';

const ProductDetailsInfo: React.FC<{
  date: string;
}> = ({date}) => {
  const styles = useStyles();
  const {day, month, year} = getParamsDate(date);
  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>Detalles del producto:</Text>
      <Text style={styles.date}>
        Comprado el {day} de {month}, {year}
      </Text>
    </View>
  );
};

export default ProductDetailsInfo;

const useStyles = makeStyles(() => ({
  container: {
    marginTop: 32,
    width: '100%',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#9B9898',
  },
  date: {
    marginTop: 19,
    fontSize: 16,
    fontWeight: '800',
    color: '#000000',
  },
}));
