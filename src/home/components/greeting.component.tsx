import React from 'react';
import {View, Text} from 'react-native';
import {makeStyles} from '@rneui/base';

const GreetingComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido de vuelta!</Text>
      <Text>Ruben Rodrigues</Text>
    </View>
  );
};

export default GreetingComponent;

const useStyles = makeStyles(() => ({
  container: {
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
  },
}));
