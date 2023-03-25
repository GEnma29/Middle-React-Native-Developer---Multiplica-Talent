import React from 'react';
import {View} from 'react-native';
import {makeStyles, Text} from '@rneui/themed';

const HeaderProductFragment: React.FC<{title: string}> = ({title}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderProductFragment;

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    paddingTop: 60,
    marginRight: 36,
    backgroundColor: theme?.colors?.lightPurple,
    marginBottom: 20,
  },
  title: {
    marginLeft: 20,
    fontSize: 24,
    fontWeight: '800',
    paddingBottom: 24,
  },
}));
