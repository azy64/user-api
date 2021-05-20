import React from "react";


class User extends React.Component{
    constructor(props) {
        super(props);
        this.state={
        }
    }
    
    render(){
        
        return(
            <div className="col col-3 col-md-3 col-sm-12  m-sm-1 m-md-3">
                <div className="card" style={{width: "18rem"}}>
                    
                    <div className="card-body">
                        <p className="card-text">
                            <span><b>Names</b> : {this.props.don.name.title}{ this.props.don.name.first} { this.props.don.name.last}</span><br/>
                            <span><b>Email</b> : {this.props.don.email}</span><br/>
                            <span><b>Genre</b> : {this.props.don.gender}</span><br/>
                            <span><b>Phone</b> : {this.props.don.phone}</span><br/>
                            <span><b>Location</b> : {this.props.don.location.street.number} {this.props.don.location.street.name} {this.props.don.location.city} {this.props.don.location.state} {this.props.don.location.postcode}</span><br/>
                        </p>
                    </div>
                </div>

            </div>
        )
    }

}

export default User;