import React,{Component} from "react";

class HeaderComponent extends Component{

    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-md">
                <a className="navbar-brand" style={{color:"white", fontFamily:"monospace"}}>Student Details Management</a>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li style={{color:"white"}}>Login</li>
                    </ul>
            </nav>

        )
    }
}

export default HeaderComponent