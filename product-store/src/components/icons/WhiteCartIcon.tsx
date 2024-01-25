import * as React from "react";
import Svg, { Path } from "react-native-svg";

const WhiteCartIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.286 4.167H18.57l-1.428 8.571H5.714L4.286 4.167ZM7.143 17.5a.952.952 0 1 0 0-1.905.952.952 0 0 0 0 1.905ZM15.714 17.5a.952.952 0 1 0 0-1.905.952.952 0 0 0 0 1.905ZM4.286 4.167H1.428"
    />
  </Svg>
)
export default WhiteCartIcon;
