import React,{Component} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useLocation } from "react-router-dom";
import moment from "moment";
import StudentManagementApiServices from "../services/StudentManagementApiServices";
import SpinnerComponent from "./SpinnerComponent";

class DetailsEditComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            student:{},
            loading:true,
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount(){
        if(this.props.params.key != -1){
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

    }

    onSubmit(values){
        this.setState({loading:true})
        let details = this.mapping(values)
        // let user = AuthenticationService.getLoggedInUserName()
        if(this.props.params.key != -1){
            StudentManagementApiServices.updateStudentDetails(this.props.params.key,details).then(
                (response)=>{
                    this.setState({loading:false})
                    this.props.navigate(`/detail-view/${response.data.data}`,{replace:true})
                }
                
            ).catch(
                (error)=>{
                    this.setState({loading:false})
                    this.props.navigate("/error")
                }
            )
        }else{
            
            StudentManagementApiServices.saveStudentDetails(details).then(
                (response)=>{
                    this.setState({loading:false})
                    this.props.navigate(`/detail-view/${response.data.data}`,{replace:true})
                }
            ).catch(
                (error)=>{
                    this.setState({loading:false})
                    this.props.navigate("/error")
                }
            )
        }
    }

    mapping(values){

           let details = {
                "studentName": values.name,
                "fatherName": values.dadName,
                "fatherMobileNo": values.dadPh,
                "fatherOccupation": values.dadOc,
                "motherName": values.momName,
                "motherMobileNo": values.momPh,
                "motherOccupation": values.momOc,
                "vill": values.vill,
                "po": values.po,
                "ps": values.ps,
                "dist": values.district,
                "state": values.state,
                "pin": values.pin,
                "dob": values.dob,
                "adhaarNo": values.adhaar,
                "gender": values.sex,
                "nationality": values.natinality,
                "religion": values.religion,
                "cast": values.cast,
                "className": values.classname,
                "rollNo": values.rollno
        }
        return details

    }

    validate(values){
        // console.log(values);
        let errors = {}
        if(!values.name &&
            !values.dadName &&
            !values.dadPh &&
            !values.dadOc &&
            !values.momName &&
            !values.momPh &&
            !values.momOc &&
            !values.vill &&
            !values.po &&
            !values.ps &&
            !values.district &&
            !values.state &&
            !values.pin &&
            !values.dob &&
            !values.adhaar &&
            !values.sex &&
            !values.natinality &&
            !values.religion &&
            !values.cast &&
            !values.classname &&
            !values.rollno
        ){
                errors.name = "Please fill all the fields"
        }

        // if(!moment(values.dob).isValid){
        //     errors.dob = "Please provide valid Date"
        // }

        return errors
    }

    render(){
        let name = this.state.student.studentName || ""
        let dadName = this.state.student.fatherName || ""
        let dadPh = this.state.student.fatherMobileNo || ""
        let dadOc = this.state.student.fatherOccupation || ""
        let momName = this.state.student.motherName || ""
        let momPh = this.state.student.motherMobileNo || ""
        let momOc = this.state.student.motherOccupation || ""
        let vill = this.state.student.vill || ""
        let po = this.state.student.po || ""
        let ps = this.state.student.ps || ""
        let district = this.state.student.dist || ""
        let state = this.state.student.state || ""
        let pin = this.state.student.pin || ""
        let dob = this.state.student.dob || ""
        let adhaar = this.state.student.adhaarNo || ""
        let sex = this.state.student.gender || ""
        let natinality = this.state.student.nationality || ""
        let religion = this.state.student.religion || ""
        let cast = this.state.student.cast || ""
        let classname = this.state.student.className || ""
        let rollno = this.state.student.rollNo || ""
        
        return(
            <div className="container">
                <label style={{padding:"5px"}}><h5>Personal Details</h5></label>
                {this.state.loading && <SpinnerComponent/>}
                {!this.state.loading && <Formik
                    initialValues={{
                        name ,
                        dadName,
                        dadPh,
                        dadOc,
                        momName,
                        momPh,
                        momOc,
                        vill,
                        po,
                        ps,
                        district,
                        state,
                        pin,
                        dob ,
                        adhaar,
                        sex,
                        natinality,
                        religion,
                        cast ,
                        classname ,
                        rollno,
                    }}
                    onSubmit={this.onSubmit}
                    validate={this.validate}
                    validateOnBlur={false}
                    validateOnChange={false}
                    enableReinitialize={true}
               >
                {
                    (props)=>(
                        <Form>
                            <ErrorMessage name="name" component="div" className="alert alert-warning"></ErrorMessage>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Student Name</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="text" name="name" placeholder="Student Name"></Field>
                            </fieldset>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Father's Name</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="text" name="dadName" placeholder="Father's Name"></Field>
                            </fieldset>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Mobile Number</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="text" name="dadPh" placeholder="Mobile Number"></Field>
                            </fieldset>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Father's Occupation</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="text" name="dadOc" placeholder="Father's Occupation"></Field>
                            </fieldset>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Mother's Name</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="text" name="momName" placeholder="Mother's Name"></Field>
                            </fieldset>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Mobile Number</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="text" name="momPh" placeholder="Mobile Number"></Field>
                            </fieldset>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Mother's Occupation</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="text" name="momOc" placeholder="Mother's Occupation"></Field>
                            </fieldset>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Village/City</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="text" name="vill" placeholder="Village/City"></Field>
                            </fieldset>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Post Office</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="text" name="po" placeholder="Post Office"></Field>
                            </fieldset>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Police Station</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="text" name="ps" placeholder="Police Station"></Field>
                            </fieldset>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">District</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="text" name="district" placeholder="District"></Field>
                            </fieldset>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">State</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="text" name="state" placeholder="State"></Field>
                            </fieldset>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Pin No</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="text" name="pin" placeholder="Pin No"></Field>
                            </fieldset>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Date of Birth</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="date" name="dob" placeholder="Date of Birth"></Field>
                            </fieldset>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Adhaar No</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="text" name="adhaar" placeholder="Adhaar No"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label style={{padding:"5px"}} className="form-row">Gender</label>
                                <div className="form-row" >
                                    <label className=" mr-4">
                                        <Field type="radio" name="sex" value="M" />
                                        Male
                                    </label>
                                    <label className=" mr-4">
                                        <Field type="radio" name="sex" value="F" />
                                        Female
                                    </label>
                                </div>
                            </fieldset>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Natinality</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="text" name="natinality" placeholder="Natinality"></Field>
                            </fieldset>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Religion</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="text" name="religion" placeholder="Religion"></Field>
                            </fieldset>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Cast</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="text" name="cast" placeholder="Cast"></Field>
                            </fieldset>
                            <div>
                                <label style={{padding:"5px"}}><h5>Academic Details</h5></label>
                            </div>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Class</label>
                                <Field as="select" className="form-control form-row" style={{padding:"5px"}}  name="classname">
                                    <option value="">--Select class--</option>
                                    <option value="Nursery">Nursery</option>
                                    <option value="K.G-I">K.G-I</option>
                                    <option value="K.G-II">K.G-II</option>
                                    <option value="STD-I">STD-I</option>
                                    <option value="STD-II">STD-II</option>
                                    <option value="STD-III">STD-III</option>
                                    <option value="STD-IV">STD-IV</option>
                                    <option value="STD-V">STD-V</option>
                                </Field>
                            </fieldset>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Roll Number</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="text" name="rollno" placeholder="Roll Number"></Field>
                            </fieldset>
                            
                            
                            <input className="btn btn-primary" type="submit" value="Submit"></input>

                        </Form>
                    )
                }
               </Formik>}
            </div>
        )
    }

}

export default DetailsEditComponent