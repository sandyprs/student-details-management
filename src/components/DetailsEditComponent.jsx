import React,{Component} from "react";
import { Formik, Form, Field } from "formik";

class DetailsEditComponent extends Component{

    constructor(props){
        super(props)


        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    onSubmit(values){
        console.log("submitted");
    }

    validate(values){
        console.log("validate");
    }

    render(){
        return(
            <div className="container">
                <Formik
               initialValues={{}}
               onSubmit={this.onSubmit}
               validate={this.validate}
               validateOnBlur={false}
               validateOnChange={false}
               enableReinitialize={true}
               >
                {
                    (props)=>(
                        <Form>
                            <label style={{padding:"5px"}}><h5>Personal Details</h5></label>
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
                                <Field as="select" className="form-control form-row" style={{padding:"5px"}}  name="class">
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
               </Formik>
            </div>
        )
    }

}
export default DetailsEditComponent