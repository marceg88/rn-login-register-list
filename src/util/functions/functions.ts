import axios from "axios";

export const responseData = (email: string, response: any) => {
    const authorization = {
        token: response.headers['authorization']
    }
    const user = response.data
    const status = response.status
    const data = {
        email,
        user,
        authorization,
        status
    }
    return data
}