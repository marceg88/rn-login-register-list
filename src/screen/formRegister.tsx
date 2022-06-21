import { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet } from "react-native"
import Input from "../components/TextInput"
import ButtonForm from "../components/Button"
// import TextInput from "../components/TextInput"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamsList } from "../navigator/RootStackParams"
import { useNavigation } from "@react-navigation/native"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"


type registerScreenProp = StackNavigationProp<RootStackParamsList, 'Register'>

const FormRegisterScreen = () => {
    const navigation = useNavigation<registerScreenProp>()
    const dispatch = useDispatch()
    const [email, setEmail] = useState({value: '', error: ''})
    const [password, setPassword] = useState({value:'', error: ''})
    const onLoginPressed = () => {     
        const emailValue = email.value     
        const passwordValue = password.value
        console.log(passwordValue)   
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.container2}>
            <Text style={styles.title}>Registrate!</Text>  
            <Input 
                label="Usuario"
                style={styles.input}  
                value={email.value}
                onChangeText={(text: any) => setEmail({value: text, error: ''})}
            />
            <Input  
                label="Contraseña"
                style={styles.input} 
                value={password.value}
                onChangeText={(text: any) => setPassword({value: text, error: ''})}
            />
            <ButtonForm
                title="registrar"
                onPress={onLoginPressed}
            /> 
            </View>         
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    container2: {
        width: "75%",
        height: 250,
        borderWidth: 1,
        borderBottomLeftRadius:6,
        borderBottomRightRadius:6,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    input: {
        width: 200,
        borderWidth: 1,
        borderColor: "#9E9E9E",
        marginTop: 6,
        marginBottom: 4,
    },
    button: {
        marginTop: 5
    }
})


export default FormRegisterScreen