import { Button } from 'react-native'

type Props = {
    title: string
}

const ButtonForm = ({title, ...props}: Props) => {
    return(
        <Button
            title={title}
            {...props}
        />
    )
    
}
export default ButtonForm