import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const ArrowIcon = (props: SvgProps) => (
  <Svg
    width={10}
    height={10}
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 7.474V10l10-5L0 0v2.526L4.947 5 0 7.474Z"
      fill="#070707"
    />
  </Svg>
);

export default ArrowIcon;
