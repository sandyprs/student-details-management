import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import StudentManagementApiServices from "../services/StudentManagementApiServices";
import SpinnerComponent from "./SpinnerComponent";

class DetailsEditComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            student: {},
            loading: true,
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        if (this.props.params.key != -1) {
            
            StudentManagementApiServices.getStudentDetails(this.props.params.key)
                .then(
                    response => {
                        let data = response.data.data
                        // console.log(data);
                        this.setState(
                            {
                                student: data,
                                loading: false
                            }
                        )

                    }
                ).catch(
                    (error) => {
                        this.setState({
                            loading: false
                        })
                        this.props.navigate("/error")
                    }
                )
        } else {
            this.setState(
                {
                    loading: false
                }
            )
        }

    }

    onSubmit(values) {
        this.setState({ loading: true })
        let details = this.mapping(values)
        // let user = AuthenticationService.getLoggedInUserName()
        if (this.props.params.key != -1) {
            StudentManagementApiServices.updateStudentDetails(this.props.params.key, details).then(
                (response) => {
                    this.setState({ loading: false })
                    this.props.navigate(`/detail-view/${response.data.data}`, { replace: true })
                }

            ).catch(
                (error) => {
                    this.setState({ loading: false })
                    this.props.navigate("/error")
                }
            )
        } else {

            StudentManagementApiServices.saveStudentDetails(details).then(
                (response) => {
                    this.setState({ loading: false })
                    this.props.navigate(`/detail-view/${response.data.data}`, { replace: true })
                }
            ).catch(
                (error) => {
                    this.setState({ loading: false })
                    this.props.navigate("/error")
                }
            )
        }
    }

    mapping(values) {

        let details = {
            "studentName": values.name,
            "fatherName": values.dadName,
            "fatherMobileNo": values.dadPh,
            "fatherOccupation": values.dadOc,
            "motherName": values.momName,
            "motherMobileNo": values.momPh,
            // "motherOccupation": values.momOc,
            "vill": values.vill,
            "po": values.po,
            "ps": values.ps,
            "dist": values.district,
            "state": values.state,
            "pin": values.pin,
            "dob": values.dob,
            "adhaarNo": values.adhaar,
            "gender": values.sex,
            "nationality": values.nationality,
            "religion": values.religion,
            "cast": values.cast,
            "className": values.classname,
            "rollNo": values.rollno,
            "doa": values.doa,
            "lang": values.lang,
            "bloodgrp": values.bloodgrp
        }
        return details

    }

    validate(values) {
        // console.log(values);
        let errors = {}
        if (!values.name &&
            !values.dadName &&
            !values.dadPh &&
            !values.dadOc &&
            !values.momName &&
            !values.momPh &&
            // !values.momOc &&
            !values.vill &&
            !values.po &&
            !values.ps &&
            !values.district &&
            !values.state &&
            !values.pin &&
            !values.dob &&
            !values.adhaar &&
            !values.sex &&
            !values.nationality &&
            !values.religion &&
            !values.cast &&
            !values.classname &&
            !values.rollno
        ) {
            errors.name = "Please fill all the fields"
        }

        // if(!moment(values.dob).isValid){
        //     errors.dob = "Please provide valid Date"
        // }

        return errors
    }

    render() {
        let name = this.state.student.studentName || ""
        let dadName = this.state.student.fatherName || ""
        let dadPh = this.state.student.fatherMobileNo || ""
        let dadOc = this.state.student.fatherOccupation || ""
        let momName = this.state.student.motherName || ""
        let momPh = this.state.student.motherMobileNo || ""
        // let momOc = this.state.student.motherOccupation || ""
        let vill = this.state.student.vill || ""
        let po = this.state.student.po || ""
        let ps = this.state.student.ps || ""
        let district = this.state.student.dist || "Purba Medinipur"
        let state = this.state.student.state || "West Bengal"
        let pin = this.state.student.pin || ""
        let dob = this.state.student.dob || ""
        let adhaar = this.state.student.adhaarNo || ""
        let sex = this.state.student.gender || ""
        let nationality = this.state.student.nationality || "Indian"
        let religion = this.state.student.religion || ""
        let cast = this.state.student.cast || ""
        let classname = this.state.student.className || ""
        let rollno = this.state.student.rollNo || ""
        let bloodgrp = this.state.student.bloodgrp || ""
        let lang = this.state.student.lang || "Bengali"
        let doa = this.state.student.doa || ""
        return (
            <div className="container">
                <label style={{ padding: "5px" }}><h5>Enter Details</h5></label>
                {this.state.loading && <SpinnerComponent />}
                {!this.state.loading && <Formik
                    initialValues={{
                        name,
                        dob,
                        adhaar,
                        sex,
                        dadName,
                        dadPh,
                        dadOc,
                        momName,
                        momPh,
                        // momOc,
                        vill,
                        po,
                        ps,
                        district,
                        state,
                        pin,
                        doa,
                        nationality,
                        religion,
                        cast,
                        lang,
                        bloodgrp,
                        classname,
                        rollno
                    }}
                    onSubmit={this.onSubmit}
                    validate={this.validate}
                    validateOnBlur={false}
                    validateOnChange={false}
                    enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="name" component="div" className="alert alert-warning"></ErrorMessage>
                                <fieldset className="form-group" >
                                    <label style={{ padding: "5px" }} className="form-row">Student Name</label>
                                    <Field className="form-control form-row" style={{ padding: "5px" }} type="text" name="name" placeholder="Student Name"></Field>
                                </fieldset>
                                <fieldset className="form-group" >
                                    <label style={{ padding: "5px" }} className="form-row">Date of Birth</label>
                                    <Field className="form-control form-row" style={{ padding: "5px" }} type="date" name="dob" placeholder="Date of Birth"></Field>
                                </fieldset>
                                <fieldset className="form-group" >
                                    <label style={{ padding: "5px" }} className="form-row">Adhaar No</label>
                                    <Field className="form-control form-row" style={{ padding: "5px" }} type="text" name="adhaar" placeholder="Adhaar No"></Field>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label style={{ padding: "5px" }} className="form-row">Gender</label>
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
                                    <label style={{ padding: "5px" }} className="form-row">Father's Name</label>
                                    <Field className="form-control form-row" style={{ padding: "5px" }} type="text" name="dadName" placeholder="Father's Name"></Field>
                                </fieldset>
                                <fieldset className="form-group" >
                                    <label style={{ padding: "5px" }} className="form-row">Mobile Number</label>
                                    <Field className="form-control form-row" style={{ padding: "5px" }} type="text" name="dadPh" placeholder="Mobile Number"></Field>
                                </fieldset>
                                <fieldset className="form-group" >
                                    <label style={{ padding: "5px" }} className="form-row">Father's Occupation</label>
                                    <Field as="select" className="form-control form-row" style={{ padding: "5px" }} type="text" name="dadOc" placeholder="Father's Occupation">
                                    <option value="">--Select Ocupation--</option>
                                        <option value="Service">Service</option>
                                        <option value="Farmer">Farmer</option>
                                        <option value="Carpenter">Carpenter</option>
                                        <option value="Bussiness">Bussiness</option>
                                        <option value="Mason">Mason</option>
                                        <option value="Doctor">Doctor</option>
                                        <option value="Barber">Barber</option>
                                        <option value="Other">Other</option>
                                    </Field>
                                </fieldset>
                                <fieldset className="form-group" >
                                    <label style={{ padding: "5px" }} className="form-row">Mother's Name</label>
                                    <Field className="form-control form-row" style={{ padding: "5px" }} type="text" name="momName" placeholder="Mother's Name"></Field>
                                </fieldset>
                                <fieldset className="form-group" >
                                    <label style={{ padding: "5px" }} className="form-row">Mobile Number</label>
                                    <Field className="form-control form-row" style={{ padding: "5px" }} type="text" name="momPh" placeholder="Mobile Number"></Field>
                                </fieldset>
                                {/* <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Mother's Occupation</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="text" name="momOc" placeholder="Mother's Occupation"></Field>
                            </fieldset> */}
                                <fieldset className="form-group" >
                                    <label style={{ padding: "5px" }} className="form-row">Village/City</label>
                                    <Field className="form-control form-row" style={{ padding: "5px" }} type="text" name="vill" placeholder="Village/City"></Field>
                                </fieldset>
                                <fieldset className="form-group" >
                                    <label style={{ padding: "5px" }} className="form-row">Post Office</label>
                                    <Field className="form-control form-row" style={{ padding: "5px" }} type="text" name="po" placeholder="Post Office"></Field>
                                </fieldset>
                                <fieldset className="form-group" >
                                    <label style={{ padding: "5px" }} className="form-row">Police Station</label>
                                    <Field className="form-control form-row" style={{ padding: "5px" }} type="text" name="ps" placeholder="Police Station"></Field>
                                </fieldset>
                                <fieldset className="form-group" >
                                    <label style={{ padding: "5px" }} className="form-row">District</label>
                                    <Field className="form-control form-row" style={{ padding: "5px" }} type="text" name="district" placeholder="District"></Field>
                                </fieldset>
                                <fieldset className="form-group" >
                                    <label style={{ padding: "5px" }} className="form-row">State</label>
                                    <Field className="form-control form-row" style={{ padding: "5px" }} type="text" name="state" placeholder="State"></Field>
                                </fieldset>
                                <fieldset className="form-group" >
                                    <label style={{ padding: "5px" }} className="form-row">Pin No</label>
                                    <Field className="form-control form-row" style={{ padding: "5px" }} type="text" name="pin" placeholder="Pin No"></Field>
                                </fieldset>
                                <fieldset className="form-group" >
                                    <label style={{ padding: "5px" }} className="form-row">Date of Admission</label>
                                    <Field className="form-control form-row" style={{ padding: "5px" }} type="date" name="doa" placeholder="Date of Admission"></Field>
                                </fieldset>
                                <fieldset className="form-group" >
                                    <label style={{ padding: "5px" }} className="form-row">Nationality</label>
                                    <Field className="form-control form-row" style={{ padding: "5px" }} type="text" name="nationality" placeholder="Nationality"></Field>
                                </fieldset>
                                <fieldset className="form-group" >
                                    <label style={{ padding: "5px" }} className="form-row">Religion</label>
                                    <Field as="select" className="form-control form-row" style={{ padding: "5px" }} type="text" name="religion" placeholder="Religion">
                                        <option value="">--Select Religion--</option>
                                        <option value="Hinduism">Hinduism</option>
                                        <option value="Islam">Islam</option>
                                        <option value="Christianity">Christianity</option>
                                        <option value="Buddhism">Buddhism</option>
                                        <option value="Sikhism">Sikhism</option>
                                        <option value="Other">Other</option>
                                    </Field>
                                </fieldset>
                                <fieldset className="form-group" >
                                    <label style={{ padding: "5px" }} className="form-row">Cast</label>
                                    <Field as="select" className="form-control form-row" style={{ padding: "5px" }} type="text" name="cast" placeholder="Cast">
                                        <option value="">--Select Cast--</option>
                                        <option value="General">General</option>
                                        <option value="OBC-A">OBC-A</option>
                                        <option value="OBC-B">OBC-B</option>
                                        <option value="ST">ST</option>
                                        <option value="SC">SC</option>
                                    </Field>
                                </fieldset>
                                <fieldset className="form-group" >
                                    <label style={{ padding: "5px" }} className="form-row">Mother Tongue</label>
                                    <Field className="form-control form-row" style={{ padding: "5px" }} type="text" name="lang" placeholder="Mother Tongue"></Field>
                                </fieldset>
                                <fieldset className="form-group" >
                                    <label style={{ padding: "5px" }} className="form-row">Blood Group</label>
                                    <Field as="select" className="form-control form-row" style={{ padding: "5px" }} name="bloodgrp">
                                    <option value="">--Select Blood Group--</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                    </Field>
                                </fieldset>
                                <fieldset className="form-group" >
                                    <label style={{ padding: "5px" }} className="form-row">Class</label>
                                    <Field as="select" className="form-control form-row" style={{ padding: "5px" }} name="classname">
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
                                    <label style={{ padding: "5px" }} className="form-row">Roll Number</label>
                                    <Field className="form-control form-row" style={{ padding: "5px" }} type="text" name="rollno" placeholder="Roll Number"></Field>
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