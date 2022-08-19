import * as React from "react"
import Svg, { Path } from "react-native-svg"

function UserIcon(props) {
  return (
    <Svg
      width={45}
      height={44}
      // {...props}
    >
     <Path
        d="M10.443 36.375v-8.263a3.666 3.666 0 013.667-3.666h17.11a3.666 3.666 0 013.667 3.666v8.263M28.099 13.06a5.432 5.432 0 11-10.865 0 5.432 5.432 0 0110.865 0z"
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

UserIcon.defaultProps={
    width: 45,
    height:44,
    fill:'#000',
    viewBox:"0 0 45 44"
}

export default UserIcon;
