import React from 'react';
import {Image, makeStyles} from '@rneui/base';

const ProductDetailsImageComponent: React.FC<{
  url: string;
}> = ({url}) => {
  const styles = useStyles();
  return <Image style={styles.image} source={{uri: url}} />;
};

export default ProductDetailsImageComponent;

const useStyles = makeStyles(() => ({
  image: {
    width: '100%',
    height: 350,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
}));
