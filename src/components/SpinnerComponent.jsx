import React,{Component} from "react";
import loading from "../resources/loading.gif"



class SpinnerComponent extends Component{
    render(){
        return(
            <div className="text-center mt-5">
                <img src={loading} alt="loading" />
            </div>
        )
    }
}

export default SpinnerComponent