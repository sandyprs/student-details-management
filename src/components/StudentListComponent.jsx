import React,{Component} from "react";
import { baseUrl, listAllUrl } from "../constants/Constants";
import StudentManagementApiServices from "../services/StudentManagementApiServices";
import BannerComponent from "./BannerComponent";
import SpinnerComponent from "./SpinnerComponent";

class StudentListComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            loading:true,
            banner:false,
            students:[

            ]
        }

        this.getDetail = this.getDetail.bind(this)
        this.addStudent = this.addStudent.bind(this)
        // this.generateReport = this.generateReport.bind(this)
    }

    addStudent(){
        this.props.navigate("/edit-details/-1")
    }

    componentDidMount(){
        // let user = AuthenticationService.getLoggedInUserName()
        // console.log(this.props.params.type);
        StudentManagementApiServices.getStudentList(this.props.params.type)
        .then(
            response => {
                let data = response.data.data
                if(data.length === 0){
                    this.setState(
                        {
                            banner:true,
                            loading:false
                        }
                    )
                }else{
                    this.setState(
                        {
                            students:data,
                            loading:false
                        }
                    )
                }
                
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
                <div className="container">
                <a href={url}>
                        <button className="btn btn-primary" style={{height:"50px",width:"150px",margin:"20px"}}>Generate Report</button>
                    </a>
                    <button className="btn btn-primary" onClick={this.addStudent} style={{height:"50px",width:"150px",margin:"20px"}}>+ Add</button>
                </div>
                <hr />
                <span><h2>Students List</h2></span>
                {this. state.loading && <SpinnerComponent/>}
                {this. state.banner && <BannerComponent/>}
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