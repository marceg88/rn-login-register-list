import React from 'react'
import { Text, TextInput, View } from 'react-native'

type Props = {
  value?: string
  label?: string
  onChangeText: () => void
}

export default function Input({label, value, ...props}: Props) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput  
        value={value}
        {...props}
      />
    </View>
  )
}