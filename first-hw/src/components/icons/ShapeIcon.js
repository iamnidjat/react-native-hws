import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ShapeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={199}
    height={184}
    fill="none"
    {...props}
  >
    <Path
      fill="#8AE2E7"
      fillOpacity={0.5}
      d="M199 0c0 55.228-44.772 100-100 100S-1 55.228-1 0 43.772-100 99-100 199-55.228 199 0Z"
    />
    <Path
      fill="#8AE2E7"
      fillOpacity={0.36}
      d="M123 84c0 55.228-44.772 100-100 100S-77 139.228-77 84-32.228-16 23-16 123 28.772 123 84Z"
    />
  </Svg>
)
export default ShapeIcon;