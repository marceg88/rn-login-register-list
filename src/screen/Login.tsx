import { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamsList } from "../navigator/RootStackParams"
import { useNavigation } from "@react-navigation/native"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getInfo, selectStatus, selectToken, selectUser, signIn } from "../store/userSlice"
import Input from "../components/TextInput"
import ButtonForm from "../components/Button"
import { AppDispatch } from "../store/store"
import { useEffect } from "react"
import { ResultWithContext } from "express-validator/src/chain"

type loginScreenProp = StackNavigationProp<RootStackParamsList, 'Login'>
export default function LoginScreen() {
    const navigation = useNavigation<loginScreenProp>()
    const dispatch: AppDispatch = useDispatch();
    const user = useSelector(selectUser)
    const token = useSelector(selectToken)
    const status = useSelector(selectStatus)
    console.log("user", token)

    const [emailValue, setEmail] = useState({value: ''})
    const [passwordValue, setPassword] = useState({value:''})
    const [error, setError] = useState("")

    const onChangeTextEmail = (text: any) => {
        setEmail({value: text})
    }
    const onChangeTextPassword = (text: any) => {
        setPassword({value: text})
    }
   
    const onLoginPressed = () => {
        const email: string = emailValue.value
        const password: string = passwordValue.value
        dispatch(signIn({email, password}))
        
        if(status === 200){
            dispatch(getInfo(token))
            navigation.navigate('Pagination')
        } 
    }
  return (
    <View style={styles.container}>
            <View style={styles.container2}>
            <Text style={styles.title}>Inicia sesion!</Text>  
            <Input 
                label="Usuario"
                style={styles.input}  
                value={emailValue.value}
                onChangeText={onChangeTextEmail}
            />
            <Input  
                label="Contraseña"
                style={styles.input} 
                value={passwordValue.value}
                onChangeText={onChangeTextPassword}
            />
            <ButtonForm
                title="iniciar sesion"
                onPress={onLoginPressed}
            /> 
            <ButtonForm
                title="registrarse"
                onPress={() => navigation.navigate('Register')}
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
        justifyContent: "center",
        backgroundColor: "#1ABC9C"
    },
    container2: {
        width: "75%",
        height: 450,
        borderWidth: 1,
        borderBottomLeftRadius:6,
        borderBottomRightRadius:6,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
        // marginTop: 50,
        // alignItems: "center",
        // justifyContent: "center"
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: "500",
        textTransform: "uppercase",
        textAlign: "center",
        padding: 10,
        color: "white",
    },
    input: {

        width: 200,
        borderWidth: 1,
        borderColor: "#9E9E9E",
        color: "white",
        
    },
    button: {
        marginTop: 5,
    }
})