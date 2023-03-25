import {createTheme} from '@rneui/themed';
import '@rneui/themed';

declare module '@rneui/themed' {
  export interface Colors {
    tertiary: string;
    accent: string;
    surface: string;
    lightBlue: string;
    lightPurple: string;
    lightGray: string;
    lightWhite: string;
    lightGreen: string;
    blueBackground: string;
    blueLightBackground: string;
    backgroundGray: string;
    textGray: string;
    blueCard: string;
  }
}
export const theme = createTheme({
  components: {
    Button: {
      raised: true,
      buttonStyle: {
        height: 50,
        backgroundColor: '#334FFA',
        borderRadius: 10,
      },
      titleStyle: {
        fontSize: 16,
        fontWeight: '800',
      },
      containerStyle: {
        borderRadius: 10,
      },
    },
  },
  lightColors: {
    lightBlue: '#AAC4FF',
    lightPurple: '#CFD6FF',
    lightGray: '#E9E9E9',
    lightWhite: '#EEF1FF',
    lightGreen: '#28DF99',
    blueBackground: '#2192FF',
    blueLightBackground: '#4DA7FF',
    backgroundGray: '#DCDCDC',
    textGray: '#9B9898',
    blueCard: '#334FFA',
  },
});
