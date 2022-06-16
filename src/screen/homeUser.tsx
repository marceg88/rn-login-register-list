import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Image, View, Text, FlatList } from "react-native"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import ButtonForm from "../components/Button"
import CardInformation from "../components/CardInfo"
import { RootStackParamsList } from "../navigator/RootStackParams"
import { AppDispatch } from "../store/store"
import { selectList, selectUser } from "../store/userSlice"

type listScreenProp = StackNavigationProp<RootStackParamsList, 'Pagination'>

const HomeUser = () => {
    const navigation = useNavigation<listScreenProp>()
    const dispatch: AppDispatch = useDispatch()
    const list = useSelector(selectList)
    const user = useSelector(selectUser)
    // const json = JSON.parse(list)
    
    console.log("home", list) 

    return(
        <View>
            <FlatList 
                data={list}
                keyExtractor={(list) => String(list.id)}
                renderItem={({item}) => <Tex>{item.color}</Tex>}
            />
            
        </View>
    )
}

export default HomeUser