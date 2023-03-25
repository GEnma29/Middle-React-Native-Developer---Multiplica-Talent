import React from 'react';
import {View} from 'react-native';
import {Button, makeStyles} from '@rneui/themed';
const FilterButtonsProduct: React.FC<{
  setListFilter: any;
  listFilter: 'all' | 'positive' | 'negative';
}> = ({listFilter, setListFilter}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      {listFilter === 'all' ? (
        <View style={styles.containerButton}>
          <Button
            style={styles.button}
            title={'Ganados'}
            onPress={() => setListFilter('positive')}
          />
          <Button
            style={styles.button}
            title={'Canjeados'}
            onPress={() => setListFilter('negative')}
          />
        </View>
      ) : (
        <View>
          <Button title={'todos'} onPress={() => setListFilter('all')} />
        </View>
      )}
    </View>
  );
};

export default FilterButtonsProduct;
const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    marginTop: 20,
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    width: 170,
  },
}));
