import React,{Component} from "react";

class ErrorComponent extends Component{

    render(){
        return(
            <div>
                <h3>Server Error occured</h3>
                <p>Please try again later</p>
            </div>
        )
    }
}

export default ErrorComponent