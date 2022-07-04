import React,{Component} from "react";
import DashboardComponent from "../components/DashboardComponent";
import DetailsEditComponent from "../components/DetailsEditComponent";
import DetailsViewComponent from "../components/DetailsViewComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import LoginComponent from "../components/LoginComonent";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import withNavigation from "../utils/withNavigation";
import StudentListComponent from "../components/StudentListComponent";

class MainHandler extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent)
        const DashboardComponentWithNavigation = withNavigation(DashboardComponent)
        const DetailsEditComponentWithNavigation = withNavigation(DetailsEditComponent)
        const DetailsViewComponentWithNavigation = withNavigation(DetailsViewComponent)
        const StudentListComponentWithNavigation = withNavigation(StudentListComponent)
        return(
            <Router>
                <div>
                    <div className="container min-vh-100" style={{backgroundColor:"#ededed", padding:"15px"}}>
                        <HeaderComponent/>
                        <div style={{marginBottom:"40px"}}>
                            <Routes>
                                <Route path="/" element={<LoginComponentWithNavigation />}/>
                                <Route path="/login" element={<LoginComponentWithNavigation />}/>
                                <Route path="/dashboard" element={<DashboardComponentWithNavigation />}/>
                                <Route path="/edit-details" element={<DetailsEditComponentWithNavigation />}/>
                                <Route path="/detail-view" element={<DetailsViewComponentWithNavigation />}/>
                                <Route path="/student-list" element={<StudentListComponentWithNavigation />}/>
                            
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