import { Image, View, Text } from "react-native"

type Props = {
    id: number,
    name: string,
    year: number,
    color: string,
    pantone_value: string,
}

const CardInformation = ({id, name, year, color, pantone_value}: Props) => {
    console.log("entra2")
    return(
        <View key={id}>
            <Text >name: {name}</Text>
            <Text >year: {year}</Text>
            <Text >color: {color}</Text>
            <Text >pantone_value: {pantone_value}</Text>
        </View>
    )
}

export default CardInformation