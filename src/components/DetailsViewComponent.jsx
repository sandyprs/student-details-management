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
                    <label style={{padding:"5px"}}><h5>Details</h5></label>
                </div>
                {this.state.loading && <SpinnerComponent/>}
                {!this.state.loading && <div>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="td">Student Name</td>
                                <td className="td">{this.state.student.studentName}</td>
                            </tr>
                            <tr>
                                <td className="td">Date of Birth</td>
                                <td className="td">{new Date(this.state.student.dob).toLocaleDateString()}</td>
                            </tr>
                            <tr>
                                <td className="td">Adhaar Number</td>
                                <td className="td">{this.state.student.adhaarNo}</td>
                            </tr>
                            <tr>
                                <td className="td">Gender</td>
                                <td className="td">{this.state.student.gender}</td>
                            </tr>
                            <tr>
                                <td className="td">Father's Name</td>
                                <td className="td">{this.state.student.fatherName}</td>
                            </tr>
                            <tr>
                                <td className="td">Mobile Number</td>
                                <td className="td">{this.state.student.fatherMobileNo}</td>
                            </tr>
                            <tr>
                                <td className="td">Father's Occupation</td>
                                <td className="td">{this.state.student.fatherOccupation}</td>
                            </tr>
                            <tr>
                                <td className="td">Mother's Name</td>
                                <td className="td">{this.state.student.motherName}</td>
                            </tr>
                            <tr>
                                <td className="td">Mobile Number</td>
                                <td className="td">{this.state.student.motherMobileNo}</td>
                            </tr>
                            <tr>
                                <td className="td">Village/City</td>
                                <td className="td">{this.state.student.vill}</td>
                            </tr>
                            <tr>
                                <td className="td">Post Office</td>
                                <td className="td">{this.state.student.po}</td>
                            </tr>
                            <tr>
                                <td className="td">Police Station</td>
                                <td className="td">{this.state.student.ps}</td>
                            </tr>
                            <tr>
                                <td className="td">District</td>
                                <td className="td">{this.state.student.dist}</td>
                            </tr>
                            <tr>
                                <td className="td">State</td>
                                <td className="td">{this.state.student.state}</td>
                            </tr>
                            <tr>
                                <td className="td">Pin Number</td>
                                <td className="td">{this.state.student.pin}</td>
                            </tr>
                            <tr>
                                <td className="td">Date of Admission</td>
                                <td className="td">{new Date(this.state.student.doa).toLocaleDateString()}</td>
                            </tr>
                            <tr>
                                <td className="td">Nationality</td>
                                <td className="td">{this.state.student.nationality}</td>
                            </tr>
                            <tr>
                                <td className="td">Religion</td>
                                <td className="td">{this.state.student.religion}</td>
                            </tr>
                            <tr>
                                <td className="td">Cast</td>
                                <td className="td">{this.state.student.cast}</td>
                            </tr>
                            <tr>
                                <td className="td">Mother Tongue</td>
                                <td className="td">{this.state.student.lang}</td>
                            </tr>
                            <tr>
                                <td className="td">Blood Group</td>
                                <td className="td">{this.state.student.bloodgrp}</td>
                            </tr>
                            <tr>
                                <td className="td">Class</td>
                                <td className="td">{this.state.student.className}</td>
                            </tr>
                            <tr>
                                <td className="td">Roll Number</td>
                                <td className="td">{this.state.student.rollNo}</td>
                            </tr>
                         </tbody>
                    </table>
                    <div className="container mt-4">
                        <Link className="btn btn-primary" to={{pathname:`/edit-details/${this.props.params.key}`, passData: this.student}}>Edit Details</Link>
                    </div>
                </div>}
                
            </div>

        )
    }

}


export default DetailsViewComponent