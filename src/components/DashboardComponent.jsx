import React,{Component} from "react";
import HeaderComponent from "./HeaderComponent";

class DashboardComponent extends Component{

    constructor(props){
        super(props)
        this.addStudent = this.addStudent.bind(this)
        this.getStudentList = this.getStudentList.bind(this)
    }

    addStudent(){
        this.props.navigate("/edit-details/-1")
    }

    getStudentList(type){
        this.props.navigate(`/student-list/${type}`)
    }

    render(){
        return(
            <div className="container" style={{overflow:"auto"}}>
                <div className="container">
                    <button className="btn btn-outline-info" onClick={()=>this.getStudentList("Nursery")} style={{height:"130px",width:"180px",marginTop:"20px", marginRight:"50px"}}>Nursery</button>
                    <button className="btn btn-outline-info" onClick={()=>this.getStudentList("K.G-I")} style={{height:"130px",width:"180px",marginTop:"20px", marginLeft:"50px"}}>K.G-I</button>
                </div>
                <div className="container">
                    <button className="btn btn-outline-info" onClick={()=>this.getStudentList("K.G-II")} style={{height:"130px",width:"180px",marginTop:"20px", marginRight:"50px"}}>K.G-II</button>
                    <button className="btn btn-outline-info" onClick={()=>this.getStudentList("STD-I")} style={{height:"130px",width:"180px",marginTop:"20px", marginLeft:"50px"}}>STD-I</button>
                </div>
                <div className="container">
                    <button className="btn btn-outline-info" onClick={()=>this.getStudentList("STD-II")} style={{height:"130px",width:"180px",marginTop:"20px", marginRight:"50px"}}>STD-II</button>
                    <button className="btn btn-outline-info" onClick={()=>this.getStudentList("STD-III")} style={{height:"130px",width:"180px",marginTop:"20px", marginLeft:"50px"}}>STD-III</button>
                </div>
                <div className="container">
                    <button className="btn btn-outline-info" onClick={()=>this.getStudentList("STD-IV")} style={{height:"130px",width:"180px",marginTop:"20px", marginRight:"50px", marginBottom:"20px"}}>STD-IV</button>
                    <button className="btn btn-outline-info" onClick={()=>this.getStudentList("STD-V")} style={{height:"130px",width:"180px",marginTop:"20px", marginLeft:"50px", marginBottom:"20px"}}>STD-V</button>
                </div>
                <div className="container">
                    <button className="btn btn-primary" onClick={this.addStudent} style={{height:"50px",width:"300px",marginTop:"20px", marginBottom:"20px"}}>Add New Student</button>
                </div>
            </div>
            
        )
    }
    
}

export default DashboardComponent