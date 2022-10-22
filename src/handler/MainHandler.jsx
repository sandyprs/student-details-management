import React,{Component} from "react";
import DashboardComponent from "../components/DashboardComponent";
import DetailsEditComponent from "../components/DetailsEditComponent";
import DetailsViewComponent from "../components/DetailsViewComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import LoginComponent from "../components/LoginComonent";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import withNavigation from "../utils/withNavigation";
import withParams from "../utils/withParams";
import StudentListComponent from "../components/StudentListComponent";
import ErrorComponent from "../components/ErrorComponent";
import AuthenticatedRoute from "../utils/AuthenticatedRoute";

class MainHandler extends Component{

    constructor(props){
        super(props)
    }

    render(){
        
        const LoginComponentWithNavigation = withNavigation(LoginComponent)
        const DashboardComponentWithNavigation = withNavigation(DashboardComponent)
        const DetailsEditComponentWithNavigation = withNavigation(DetailsEditComponent)
        const DetailsViewComponentWithNavigation = withNavigation(DetailsViewComponent)
        const ErrorComponentWithNavigation = withNavigation(ErrorComponent)
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent)
        const StudentListComponentWithNavigation = withNavigation(StudentListComponent)
        const StudentListComponentWithParams = withParams(StudentListComponentWithNavigation)
        const DetailsViewComponentWithParams = withParams(DetailsViewComponentWithNavigation)
        const DetailsEditComponentWithParams = withParams(DetailsEditComponentWithNavigation)
        return(
            <Router>
                <div>
                    <div className="container" style={{background:"rgba(250, 250, 250, 0.7)", padding:"15px", minHeight:"100vh"}}>
                        <HeaderComponentWithNavigation />
                        <div style={{marginBottom:"40px", overflow: "auto", maxHeight:"100vh"}}>
                            <Routes>
                                <Route path="/" element={<LoginComponentWithNavigation />}/>
                                <Route path="/login" element={<LoginComponentWithNavigation />}/>
                                <Route path="/dashboard" element={<AuthenticatedRoute><DashboardComponentWithNavigation /></AuthenticatedRoute>}/>
                                <Route path="/edit-details/:key" element={<AuthenticatedRoute><DetailsEditComponentWithParams /></AuthenticatedRoute>}/>
                                <Route path="/detail-view/:key" element={<AuthenticatedRoute><DetailsViewComponentWithParams /></AuthenticatedRoute>}/>
                                <Route path="/student-list/:type" element={<AuthenticatedRoute><StudentListComponentWithParams /></AuthenticatedRoute>}/>
                                <Route path="/error" element={<ErrorComponentWithNavigation />}/>
                                
                            
                            </Routes>
                        </div>
                        <div className="footer row container">
                            <FooterComponent/>
                        </div>
                    </div>
                    
                </div>
            </Router>
            
        )
    }
}

export default MainHandler
