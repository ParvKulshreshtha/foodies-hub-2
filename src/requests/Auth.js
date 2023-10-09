import Axios from "axios"

export const createUser = async ({name, email, password, location}) => {
    try{
        await Axios.post("http://localhost:5000/api/createuser", {
        name, email, password, location
    })
    } catch(err){
        alert(err)
    }
}

export const loginUser = async ({ email, password}) => {
    try{
        const res = await Axios.post("http://localhost:5000/api/loginuser", {
        email, password
        })
        return res
    } catch(err){
        console.log(err)
    }
}