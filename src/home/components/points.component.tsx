import React from 'react';
import {View} from 'react-native';
import {makeStyles, Text} from '@rneui/themed';
import {currencyFormat} from '@src/utils/currency-format.utils';
import {getParamsDate} from '@src/utils/date.utilities';

const PointsComponent: React.FC<{
  points: number;
}> = ({points}) => {
  const styles = useStyles();
  const date = new Date();
  const {month} = getParamsDate(date.toString());
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TUS PUNTOS</Text>
      <View style={styles.card}>
        <Text style={styles.moth}>{month}</Text>
        <View style={styles.containerPoints}>
          <Text style={styles.points}>{currencyFormat(points)} pts</Text>
        </View>
      </View>
    </View>
  );
};

export default PointsComponent;

const useStyles = makeStyles((theme: any) => ({
  container: {
    width: '100%',
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
    color: theme?.color?.textGray,
    marginBottom: 20,
  },
  card: {
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
    padding: 18,
    backgroundColor: theme?.colors?.blueCard,
    width: '100%',
    borderRadius: 16,
    maxWidth: 286,
    height: 143,
  },
  moth: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
    lineHeight: 21.86,
  },
  containerPoints: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  points: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    lineHeight: 44,
  },
}));
