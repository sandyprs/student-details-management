import { authUrl, baseUrl, detailUrl, listAllUrl, listUrl, saveUrl, updateUrl } from "../constants/Constants";
import axios from "axios";



class StudentManagementApiServices{
    
    getAuthToken(username, password){
        let url = baseUrl+authUrl
       return axios.post(url,{
        "username":username,
        "password":password
       })

    }

    saveStudentDetails(details){
        let url = baseUrl+saveUrl
        // console.log(url);
       return axios.post(url,details,{
        headers:{
            Authorization:"Bearer "+sessionStorage.getItem(this.username)
        }
   })

    }

    updateStudentDetails(key,details){
        let url = baseUrl+updateUrl.replace("{key}", key)
        // console.log(url);
       return axios.post(url,details,{
        headers:{
            Authorization:"Bearer "+sessionStorage.getItem(this.username)
        }
   })

    }

    getStudentList(type){
        let url = baseUrl+ listUrl.replace("{type}", type)
        // console.log(url);
       return axios.get(url,{
        headers:{
            Authorization:"Bearer "+sessionStorage.getItem(this.username)
        }
   })

    }

    // getStudentAllList(type){
    //     let url = baseUrl+ listAllUrl.replace("{type}", type)
    //     // console.log(url);
    //    return axios.get(url)

    // }

    getStudentDetails(key){
        let url = baseUrl+ detailUrl.replace("{key}", key)
        // console.log(url);
       return axios.get(url)

    }


    setUpAxiosInterceptors(token){
        let bearerToken = this.createToken(token)
        sessionStorage.setItem("isLoggedIn","yes")
        axios.interceptors.request.use(
            (config)=>{
                config.headers.Authorization = bearerToken
                return config
            }
        )

    }

    createToken(token){
        return "Bearer "+token
    }

    getIsLoggedIn(){
        // console.log(this.isLoggedIn);
        if(sessionStorage.getItem("isLoggedIn") == "yes"){
            return true
        }
        return false 
    }

    // setIsLoggedIn(isLoggedIn){
    //     this.isLoggedIn = isLoggedIn
    //     console.log(this.isLoggedIn);
    // }

}

export default new StudentManagementApiServices()