import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MenuIcon(props) {
  return (
    <Svg
      width={45}
      height={44}
      // {...props}
    >
       <Path
        d="M10.554 12.225H35M10.554 22H35m-24.446 9.775H35"
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

MenuIcon.defaultProps={
    width: 45,
    height:44,
    fill:'#000',
    viewBox:"0 0 45 44"
}

export default MenuIcon;
