import React,{Component} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import StudentManagementApiServices from "../services/StudentManagementApiServices";
import SpinnerComponent from "./SpinnerComponent";

class LoginComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:"",
            loading:false
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    onSubmit(values){

        // this.props.navigate("/dashboard",{replace:true},{state:true})
        this.setState({
            loading:true
        })

        StudentManagementApiServices.getAuthToken(values.username, values.password)
        .then(
            (response)=>{

                // console.log(response.data.data);
                if(response.data.message === "Successful"){
                    // StudentManagementApiServices.setIsLoggedIn(true)
                    StudentManagementApiServices.setUpAxiosInterceptors(response.data.data.token)
                    this.setState({
                        loading:false
                    })
                    this.props.navigate("/dashboard",{replace:true},{state:true})

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

    validate(values){
        let errors = {}
        if (!values.username && !values.password) {
            errors.username = "Please enter username and password"
        }

        return errors

    }


    render(){
        let username = this.state.username
        let password = this.state.password
        return(
            <div className="container">
               <Formik
               initialValues={{username,password}}
               onSubmit={this.onSubmit}
               validate={this.validate}
               validateOnBlur={false}
               validateOnChange={false}
               enableReinitialize={true}
               >
                {
                    (props)=>(
                        <Form>
                            
                            <ErrorMessage name="username" component="div" className="alert alert-warning mt-3"></ErrorMessage>
                            <div className="container" style={{marginTop:"150px", width:"350px", backgroundColor:"snow", padding:"25px", borderRadius:"9px"}}>
                                <fieldset>
                                    {/* <label style={{padding:"5px"}} className="form-row">Username</label> */}
                                    <Field className="form-control" style={{marginTop:"16px", padding:"5px"}}  type="text" name="username" placeholder="User Name"></Field>
                                </fieldset>
                                <fieldset>
                                    {/* <label style={{padding:"5px"}} className="form-row">Password</label> */}
                                    <Field className="form-control" style={{marginTop:"8px", padding:"5px"}}  type="password" name="password" placeholder="Password"></Field>
                                </fieldset>
                                <input className="btn btn-primary" style={{marginTop:"16px", padding:"5px"}} type="submit" value="Login"></input>
                            </div>

                        </Form>
                    )
                }
               </Formik>
               {this. state.loading && <SpinnerComponent/>}
            </div>
        )
    }
}

export default LoginComponent