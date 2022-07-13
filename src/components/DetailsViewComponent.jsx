import React,{Component, useState} from "react";
import { Link } from "react-router-dom";
import StudentManagementApiServices from "../services/StudentManagementApiServices";
import SpinnerComponent from "./SpinnerComponent";


class DetailsViewComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            student:{},
            loading:true
        }

        

    }

    componentDidMount(){
        StudentManagementApiServices.getStudentDetails(this.props.params.key)
        .then(
            response => {
                let data = response.data.data
                // console.log(data);
                this.setState(
                    {
                        student:data,
                        loading:false
                    }
                )
                // console.log(data);
                
            }
        ).catch(
            (error)=>{
                this.setState({
                    loading:false
                })
                this.props.navigate("/error")
            }
        )

    }


    render(){

        return(
            <div className="container">
                <div>
                    <label style={{padding:"5px"}}><h5>Personal Details</h5></label>
                </div>
                {this.state.loading && <SpinnerComponent/>}
                {!this.state.loading && <div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                            Student Name
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.studentName}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                            Father's Name
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.fatherName}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                            Mobile Number
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.fatherMobileNo}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                            Father's Occupation
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.fatherOccupation}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                            Mother's Name
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.motherName}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                            Mobile Number
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.motherMobileNo}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                            Mother's Occupation
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.motherOccupation}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                            Village/City
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.vill}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                            Post Office
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.po}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                            Police Station
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.ps}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                            District
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.dist}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                            State
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.state}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                        Pin Number
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.pin}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                        Date of Birth
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.dob}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                        Adhaar Number
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.adhaarNo}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                        Gender
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.gender}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                        Nationality
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.nationality}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                        Religion
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.religion}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                        Cast
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.cast}
                        </div>
                    </div>
                    <div>
                        <label style={{padding:"5px"}}><h5>Academic Details</h5></label>
                    </div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                        Class
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.className}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{textAlign:"end"}}>
                            Roll Number
                        </div>
                        <div className="col" style={{textAlign:"start"}}>
                            {this.state.student.rollNo}
                        </div>
                    </div>
                    <div className="container mt-4">
                        <Link className="btn btn-primary" to={{pathname:`/edit-details/${this.props.params.key}`}}>Edit</Link>
                    </div>
                </div>}
                
            </div>

        )
    }

}


export default DetailsViewComponent