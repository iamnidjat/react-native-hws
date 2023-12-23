import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CartIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1A1A1A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6m4 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm11 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </Svg>
)
export default CartIcon
