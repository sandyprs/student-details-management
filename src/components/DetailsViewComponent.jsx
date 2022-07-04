import React,{Component} from "react";


class DetailsViewComponent extends Component{

    constructor(props){
        super(props)

        this.gotoEditDetails = this.gotoEditDetails.bind(this)

    }

    gotoEditDetails(){
        this.props.navigate("/edit-details")
    }

    render(){

        return(
            <div className="container">
                <div>
                    <label style={{padding:"5px"}}><h5>Personal Details</h5></label>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                        Student Name
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                        Father's Name
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                        Mobile Number
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                        Father's Occupation
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                        Mother's Name
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                        Mobile Number
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                        Mother's Occupation
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                        Village/City
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                        Post Office
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                        Police Station
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                        District
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                        State
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                       Pin Number
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                       Date of Birth
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                      Adhaar Number
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                       Gender
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                       Nationality
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                       Religion
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                       Cast
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div>
                    <label style={{padding:"5px"}}><h5>Academic Details</h5></label>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                       className
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{textAlign:"end"}}>
                        Roll Number
                    </div>
                    <div className="col" style={{textAlign:"start"}}>
                        PP
                    </div>
                </div>
                <div className="container mt-4">
                    <input className="btn btn-primary" onClick={this.gotoEditDetails} type="button" value="Edit"></input>
                </div>
                
            </div>

        )
    }

}

export default DetailsViewComponent