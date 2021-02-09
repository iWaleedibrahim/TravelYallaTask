import React from "react"
import { TouchableOpacity, Text } from "react-native"
import COLORS from "../../common/colors"
import styles  from "./styles"

function Button(props) {
    const { title, onPress, disabled} = props
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}
      disabled={disabled}
      >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;
