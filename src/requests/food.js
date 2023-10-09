import Axios from "axios"

export const getFoodItems = async () => {
    try{
        const res = await Axios.get("http://localhost:5000/api/foods")
        return res
    } catch(err){
        console.log(err)
    }
}

export const getCategoryItems = async () => {
    try{
        const res = await Axios.get("http://localhost:5000/api/category")
        return res
    } catch(err){
        console.log(err)
    }
}