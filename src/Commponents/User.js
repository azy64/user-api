import React from "react";


class User extends React.Component{
    constructor(props) {
        super(props);
        this.state={
        }
    }
    
    render(){
        
        return(
            <div className="col col-3 col-md-3">
                <div className="card" style={{width: "18rem"}}>
                    
                    <div className="card-body">
                        <p className="card-text">
                            <span>Genre:{this.props.don.gender}</span>
                            <span>Genre:{this.props.don.name.title}{ this.props.don.name.first} { this.props.don.name.last}</span><br/>
                            <span>Email:{this.props.don.email}</span>
                            <span>Phone:{this.props.don.phone}</span>
                            <span>Location:{this.props.don.location.street} {this.props.don.location.city} {this.props.don.location.state} {this.props.don.location.postcode}</span>
                        </p>
                    </div>
                </div>

            </div>
        )
    }

}

export default User;