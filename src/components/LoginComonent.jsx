import React,{Component} from "react";
import { Formik, Form, Field } from "formik";

class LoginComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:""
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    onSubmit(values){
        this.props.navigate("/dashboard")
    }

    validate(values){

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
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Email address</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="text" name="username" placeholder="User Name"></Field>
                                <small id="emailHelp" style={{padding:"5px"}}  className="form-row text-muted ">We'll never share your email with anyone else.</small>
                            </fieldset>
                            <fieldset className="form-group" >
                                <label style={{padding:"5px"}} className="form-row">Password</label>
                                <Field className="form-control form-row" style={{padding:"5px"}}  type="password" name="password" placeholder="Password"></Field>
                            </fieldset>
                            <input className="btn btn-primary" type="submit" value="Login"></input>

                        </Form>
                    )
                }
               </Formik>
            </div>
        )
    }
}

export default LoginComponent