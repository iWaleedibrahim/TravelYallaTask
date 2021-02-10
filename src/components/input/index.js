import React from "react"
import { View, TextInput, Image, Keyboard } from "react-native"
import COLORS  from "../../common/colors"
import styles from "./styles"

export default function Input(props) {
    
  const {
    icon,
    placeholder,
    maxLength,
    size,
    onChangeText,
    secureTextEntry,
    keyboardType,
    returnKeyType,
    style,
    placeholderTextColor,
    textInputStyle,
  } = props

  
  return (
    <View style={[styles.container, style]}>
      {icon}
      <TextInput
        style={[styles.textInput, textInputStyle]}
        placeholderTextColor={COLORS.DARK_GRAY}
        maxLength={30}
        underlineColorAndroid={COLORS.TRAVELYALLA_GRAY}
        onSubmitEditing={() => Keyboard.dismiss()}
        placeholder={placeholder}
        onChangeText={onChangeText}
        returnKeyType={'done'}
        autoCapitalize={"none"}
        keyboardType={keyboardType || 'default'}
        autoCorrect={false}
      />
    </View>
  )
}


