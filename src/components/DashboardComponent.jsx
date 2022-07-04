import React,{Component} from "react";

class DashboardComponent extends Component{

    constructor(props){
        super(props)
        
        this.addStudent = this.addStudent.bind(this)
        this.getStudentList = this.getStudentList.bind(this)
    }

    addStudent(){
        this.props.navigate("/edit-details")
    }

    getStudentList(){
        this.props.navigate("/student-list")
    }

    render(){
        return(
            <div className="container" style={{overflow:"auto"}}>
                <div className="container">
                    <button className="btn btn-outline-info" onClick={this.getStudentList} style={{height:"130px",width:"180px",marginTop:"20px", marginRight:"50px"}}>Nursery</button>
                    <button className="btn btn-outline-info" onClick={this.getStudentList} style={{height:"130px",width:"180px",marginTop:"20px", marginLeft:"50px"}}>K.G-I</button>
                </div>
                <div className="container">
                    <button className="btn btn-outline-info" onClick={this.getStudentList} style={{height:"130px",width:"180px",marginTop:"20px", marginRight:"50px"}}>K.G-II</button>
                    <button className="btn btn-outline-info" onClick={this.getStudentList} style={{height:"130px",width:"180px",marginTop:"20px", marginLeft:"50px"}}>STD-I</button>
                </div>
                <div className="container">
                    <button className="btn btn-outline-info" onClick={this.getStudentList} style={{height:"130px",width:"180px",marginTop:"20px", marginRight:"50px"}}>STD-II</button>
                    <button className="btn btn-outline-info" onClick={this.getStudentList} style={{height:"130px",width:"180px",marginTop:"20px", marginLeft:"50px"}}>STD-III</button>
                </div>
                <div className="container">
                    <button className="btn btn-outline-info" onClick={this.getStudentList} style={{height:"130px",width:"180px",marginTop:"20px", marginRight:"50px", marginBottom:"20px"}}>STD-IV</button>
                    <button className="btn btn-outline-info" onClick={this.getStudentList} style={{height:"130px",width:"180px",marginTop:"20px", marginLeft:"50px", marginBottom:"20px"}}>STD-V</button>
                </div>
                <div className="container">
                    <button className="btn btn-primary" onClick={this.addStudent} style={{height:"50px",width:"300px",marginTop:"20px", marginBottom:"20px"}}>Add New Student</button>
                </div>
            </div>
            
        )
    }
    
}

export default DashboardComponent