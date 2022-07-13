import React,{Component} from "react";
import { Link } from "react-router-dom";
import StudentManagementApiServices from "../services/StudentManagementApiServices";

class HeaderComponent extends Component{

    clear(){
        sessionStorage.removeItem("isLoggedIn")
    }


    render(){
        const isLoggedIn = StudentManagementApiServices.getIsLoggedIn()
        return(
                <nav className="navbar navbar-dark bg-dark navbar-expand-md">
                    <a className="navbar-brand" style={{color:"white", fontFamily:"monospace"}}>Student Details Management</a>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        { isLoggedIn && <li style={{color:"white"}}><Link className="nav-link" to="/dashboard" replace="true">Home</Link></li>}
                        { isLoggedIn && <li style={{color:"white"}}><Link className="nav-link" onClick={this.clear} to="/login" replace="true">Log Out</Link></li>}
                    </ul>
                </nav>

        )
    }
}

export default HeaderComponent