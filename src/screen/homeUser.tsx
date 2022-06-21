import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { executeReducerBuilderCallback } from "@reduxjs/toolkit/dist/mapBuilders"
import { useEffect } from "react"
import { Row } from "react-bootstrap"
import { Image, View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from "react-native"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import ButtonForm from "../components/Button"
import CardInformation from "../components/CardInfo"
import { RootStackParamsList } from "../navigator/RootStackParams"
import { AppDispatch } from "../store/store"
import { getInfo, selectList, selectToken, selectUser } from "../store/userSlice"

type listScreenProp = StackNavigationProp<RootStackParamsList, 'Pagination'>

const HomeUser = () => {
    const navigation = useNavigation<listScreenProp>()
    const dispatch: AppDispatch = useDispatch()
    const list = useSelector(selectList)
    const user = useSelector(selectUser)
    const token = useSelector(selectToken)
    console.log("home", list)
    const onPressPage1 = () => {
        const data = {
            token: token,
            page: 1
        } 
        dispatch(getInfo(data))
    }
    const onPressPage2 = () => {
        const data = {
            token: token,
            page: 2
        } 
        dispatch(getInfo(data))
    }
    useEffect(() => {
        dispatch(getInfo({token, page: 1}))
    },[]) 

    return(
        <View>
            <FlatList 
                data={list}
                horizontal={false}
                numColumns={2}
                keyExtractor={(list) => String(list.id)}
                renderItem={({item}) => 
                    <CardInformation 
                        name={item.name}
                        color={item.color}
                        pantone_value={item.pantone_value}
                        year={item.year}
                    />   
                }
            />
            <View style={style.container}>
                <TouchableOpacity 
                    onPress={onPressPage1}
                    style={style.button}
                >
                    <Text style={style.text}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={onPressPage2}
                    style={style.button}
                >
                    <Text style={style.text}>2</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        elevation: 8,
        backgroundColor: "#009688",
        width:30,
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        margin: 10
        
    },
    text: {
        color: "white"
    }

})

export default HomeUser

