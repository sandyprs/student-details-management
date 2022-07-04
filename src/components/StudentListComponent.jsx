import React,{Component} from "react";

class StudentListComponent extends Component{

    constructor(props){
        super(props)

        this.getDetail = this.getDetail.bind(this)
    }

    getDetail(){
        this.props.navigate("/detail-view")
    }

    render(){
        const Users = [
            {
              id: '01',
              name: 'John Deo',
              email: 'john@gmail.com',
              phone: '202-555-0163'
            },
            {
              id: '02',
              name: 'Brad Pitt',
              email: 'fightclud@gmail.com',
              phone: '202-555-0106'
            },
          ];
        return(
            <div className="container">
                <span><h2>Students List</h2></span>
                <ul className="list-group">
                    {Users.map((data) => (
                        <li key={data.id} className="list-group-item" onClick={this.getDetail}> 
                        <div style={{textAlign:"start"}}>{data.name}</div>
                        <div style={{textAlign:"start"}}>{data.email}</div>
                        <div style={{textAlign:"start"}}>{data.phone}</div>
                        </li>
                    ))}
                </ul>
            </div>
            
        )
    }
}

export default StudentListComponent