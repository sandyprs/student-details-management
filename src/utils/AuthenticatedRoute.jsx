import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import StudentManagementApiServices from '../services/StudentManagementApiServices'


class AuthenticatedRoute extends Component{

    render(){
        if(StudentManagementApiServices.getIsLoggedIn()){
            return {...this.props.children}
        }else{
            return <Navigate to="/login"/>
        }
        
    }

}

export default AuthenticatedRoute