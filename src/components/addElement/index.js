import React, { useState } from "react"
import { View } from "react-native"
import styles from "./styles"
import Input from '../../components/input'
import Button from '../../components/button'
import _ from 'lodash'


export default function AddElement(props) {
  

  const [values, setValues] = useState({})

  const { fields, onPressButton, buttonTitle } = props

  function didUserEntryAllInputs() {
    return fields.filter(item => Object.keys(values).includes(item.id)).length === fields.length;
  }

  return (
    <View style={styles.container}>
      
      {fields.map(item => {
        return (
          <Input
            key={item.placeHolder.toString()} // * look on comment blew
            onChangeText={text =>  setValues({ ...values, [item.id]: text })}
            icon={item.fieldIcon}
            placeholder={item.placeHolder}
            keyboardType={item.keyboardType}
            value={typeof values == 'object' ? values?.[item?.id] : ''  }
           
          />
        )
      })}

      <Button
        title={buttonTitle}
        onPress={() => {
          onPressButton(values)
          if(didUserEntryAllInputs()) {
            setValues(null)
          }
        }}
        disabled={_.isEmpty(values)}
      />
    </View>
  )
}


// we used placeHolder as key because id causes a bug, read about it here 
// https://reactkungfu.com/2015/09/react-js-loses-input-focus-on-typing/
