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

export const LoginAPI = async(payload) =>{
    try {
        console.log(payload)
        const response = await axios.post(`${url}/api/auth/login`,payload)
        return response.data
        
    } catch (error) {
        console.log("Error in login time ",error)
    }
} 