import * as React from "react";
import Svg, { Path } from "react-native-svg";

const GridIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#9586A8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 3H3v7h7V3ZM21 3h-7v7h7V3ZM21 14h-7v7h7v-7ZM10 14H3v7h7v-7Z"
    />
  </Svg>
)
export default GridIcon;

