import React from "react";


class User extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }
    
    render(){
        return(
            <div className="col col-3 col-md-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

            </div>
        )
    }

}

export default User;