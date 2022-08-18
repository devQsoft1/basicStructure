import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeIcon(props) {
  return (
    <Svg
      width={44}
      height={44}
    //   {...props}
    >
      <Path
        d="M34.098 21.96v9.431c0 2.985-2.437 5.404-5.444 5.404h-13.61c-3.006 0-5.443-2.419-5.443-5.404v-9.43M5.064 19.21L22 7.205 38.936 19.21"
        stroke={props.fill}
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

HomeIcon.defaultProps={
    width: 44,
    height:44,
    fill:'#000',
    viewBox:"0 0 44 44"
}

export default HomeIcon;
