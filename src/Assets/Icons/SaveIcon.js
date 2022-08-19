import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SaveIcon(props) {
  return (
    <Svg
      width={45}
      height={44}
      // {...props}
    >
       <Path
        d="M13.002 34.16V15.167c0-3.59-.68-6.5 2.357-6.5h14.836c3.038 0 2.358 2.91 2.358 6.5V34.16c0 2.127-.88 4.119-2.358 5.334l-7.418-8.176-7.418 8.176c-1.477-1.213-2.357-3.207-2.357-5.334z"
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

SaveIcon.defaultProps={
    width: 45,
    height:44,
    fill:'#000',
    viewBox:"0 0 45 44"
}

export default SaveIcon;
