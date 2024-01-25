import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HeartIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#9586A8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.367 3.842a4.583 4.583 0 0 0-6.484 0L10 4.725l-.883-.883a4.584 4.584 0 1 0-6.484 6.483l.884.883L10 17.692l6.483-6.484.884-.883a4.585 4.585 0 0 0 0-6.483v0Z"
    />
  </Svg>
)
export default HeartIcon;
