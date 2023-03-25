import {getParamsDate} from '@src/utils/date.utilities';

const createdAt = '2022-12-09T06:34:25.607Z';
const expectResponse = {
  day: 5,
  month: 'Diciembre',
  year: 2022,
};

describe('date util', () => {
  it('get params  child', () => {
    const {day, month, year} = getParamsDate(createdAt);
    expect(day).toEqual(expectResponse.day);
    expect(month).toEqual(expectResponse.month);
    expect(year).toEqual(expectResponse.year);
  });
});
