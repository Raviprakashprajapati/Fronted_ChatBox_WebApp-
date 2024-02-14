import axios from "axios"

const url = "http://localhost:5000"

const axiosWithToken = axios.create({
    baseURL:url,
    withCredentials:true,
    headers:{
        'Content-Type':"application/json"
    }
})

const token = localStorage.getItem("accessToken") || null
if(token){
    axiosWithToken.defaults.headers['Authorization'] = 'Bearer ' + token
}

export const getSideBarUserAPI = async() =>{
    try {

        const response = await axiosWithToken.get(`${url}/api/users`)
        return response.data        
    } catch (error) {
        console.log("Error in sidebar User ", error);
    }
}