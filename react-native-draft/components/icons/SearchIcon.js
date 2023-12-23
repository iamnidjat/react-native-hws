import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SearchIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#1A1A1A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.5 21-4.35-4.35M19.5 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
    />
  </Svg>
)

export default SearchIcon
