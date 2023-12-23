import * as React from "react"
import Svg, { Path } from "react-native-svg"

const HeartIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1A1A1A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.958 4.591a5.255 5.255 0 0 0-1.708-1.177 5.122 5.122 0 0 0-4.028 0 5.255 5.255 0 0 0-1.708 1.177L12.5 5.638 11.486 4.59a5.182 5.182 0 0 0-3.722-1.59 5.183 5.183 0 0 0-3.722 1.59A5.52 5.52 0 0 0 2.5 8.431a5.52 5.52 0 0 0 1.542 3.841L12.5 21l8.458-8.728a5.446 5.446 0 0 0 1.141-1.761 5.581 5.581 0 0 0 0-4.158 5.445 5.445 0 0 0-1.141-1.762Z"
    />
  </Svg>
)
export default HeartIcon
