import React from 'react';
import {SafeAreaView} from 'react-native';
import {View} from 'react-native';
import {makeStyles} from '@rneui/themed';

const LayoutProductDetails: React.FC<{
  imageProductDetails: React.ReactNode;
  infoProductDetails: React.ReactNode;
  pointsProductDetails: React.ReactNode;
  buttonProductDetails: React.ReactNode;
}> = ({
  imageProductDetails,
  infoProductDetails,
  pointsProductDetails,
  buttonProductDetails,
}) => {
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerImage}>{imageProductDetails}</View>
      <View>{infoProductDetails}</View>
      <View>{pointsProductDetails}</View>
      <View style={styles.containerButton}>{buttonProductDetails}</View>
    </SafeAreaView>
  );
};

export default LayoutProductDetails;

const useStyles = makeStyles(theme => ({
  container: {
    width: '90%',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  containerText: {
    backgroundColor: theme?.colors?.lightPurple,
  },
  containerImage: {
    marginTop: 20,
    paddingTop: 20,
  },
  containerButton: {
    width: '100%',
    marginTop: 47,
  },
}));
