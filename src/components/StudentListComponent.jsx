import fileDownload from "js-file-download";
import React,{Component} from "react";
import { Link } from "react-router-dom";
import { baseUrl, listAllUrl } from "../constants/Constants";
import StudentManagementApiServices from "../services/StudentManagementApiServices";
import SpinnerComponent from "./SpinnerComponent";

class StudentListComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            loading:true,
            students:[

            ]
        }

        this.getDetail = this.getDetail.bind(this)
        // this.generateReport = this.generateReport.bind(this)
    }

    componentDidMount(){
        // let user = AuthenticationService.getLoggedInUserName()
        // console.log(this.props.params.type);
        StudentManagementApiServices.getStudentList(this.props.params.type)
        .then(
            response => {
                let data = response.data.data
                this.setState(
                    {
                        students:data,
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

    getDetail(key){
        this.props.navigate(`/detail-view/${key}`)
    }

    // generateReport(){
    //     StudentManagementApiServices.getStudentAllList(this.props.params.type)
    //     .then(
    //         (response)=>{
    //             fileDownload(response.data)
    //         }
    //     )
    // }

    render(){
        let url = baseUrl+ listAllUrl.replace("{type}", this.props.params.type)
        // console.log(url);
        return(
            <div className="container">
                <span><h2>Students List</h2></span>
                <a href={url}>Generate Report</a>
                {this. state.loading && <SpinnerComponent/>}
                <ul className="list-group">
                    {this.state.students.map((data) => (
                        <li key={data.rollNo} className="list-group-item" onClick={()=>this.getDetail(data.key)}> 
                        <div style={{textAlign:"start"}}>Student Name:&emsp;{data.studentName}</div>
                        <div style={{textAlign:"start"}}>Class:&emsp;&emsp;&emsp;&emsp;&emsp;{data.className}</div>
                        <div style={{textAlign:"start"}}>Roll No:&emsp;&emsp;&emsp;&emsp;{data.rollNo}</div>
                        </li>
                    ))}
                </ul>
            </div>
            
        )
    }
}

export default StudentListComponent