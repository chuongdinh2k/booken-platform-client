import axios from "axios"
import { axiosClient } from "./axios"

const verifyMe = async() => {
    return await axiosClient.get('/auth/me');
}

export {
    verifyMe
}