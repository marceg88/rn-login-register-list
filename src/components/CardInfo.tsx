import { Image, View, Text, StyleSheet } from "react-native"

type Props = {
    id: number,
    name: string,
    year: number,
    color: string,
    pantone_value: string,
}

const CardInformation = ({id, name, year, color, pantone_value}: Props) => {
    const backgroundColorDin = {
        backgroundColor: color
    }
    return(
        <View style={[style.container, backgroundColorDin]}  key={id}>
            <Text >Name: {name}</Text>
            <Text >Year: {year}</Text>
            <Text >Color: {color}</Text>
            <Text >PantoneValue: {pantone_value}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        elevation: 8,
        backgroundColor: "#009688",
        width: "45%",
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        margin: 5
    }
})

export default CardInformation