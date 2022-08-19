import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchIcon(props) {
  return (
    <Svg
    width={45}
    height={44}
  >
    <Path
      d="M29.258 28.37l8.552 8.554m-4.886-17.406c0 6.913-5.604 12.518-12.517 12.518-6.914 0-12.518-5.605-12.518-12.518C7.889 12.604 13.493 7 20.407 7c6.913 0 12.518 5.604 12.518 12.518z"
      stroke={props.fill}
      // stroke="#000"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )
}

SearchIcon.defaultProps={
    width: 45,
    height:44,
    fill:'#000',
    viewBox:"0 0 45 44"
}

export default SearchIcon;
