
import { Text, TextInput, View } from 'react-native'

type Props = {
    // error?: boolean
    value?: string
    label?: string
    onChangeText: () => void
    // errorText?: string

}

const Input = ({label, value, ...props}: Props) => {
    return(
        <>
            <View>
                <Text>{label}</Text>
                <TextInput 
                    value={value}
                    {...props}
                />
            </View>
        </>
        
    )
}
export default Input