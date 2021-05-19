import React from 'react'
import User from "./User";


class UsersContainer extends React.Component{
    constructor(props) {
        super(props)
        
        this.state={
            results:[]
        }
        this.getUsers()
    }
    getUsers=()=>{
        fetch('https://randomuser.me/api?results=10')
        .then(rest=>rest.json())
        .then(data=>{
            this.setState({results:data.results})
        })
        
    }
    afficheUsers=()=>{
        let k=[];
        this.state.results.map((value,index)=>{
            k.push(<User don={value} key={k.length}/>)
            console.log(value);
            return value
        });
       
        return k;
    }
    componentDidMount(){
        this.getUsers();
    }
   
    render(){
       
        return(
            <div className="row">
                
               
                {
                    this.afficheUsers()
                    
                  
                }
                
            </div>
        )
    }
    
}
export default UsersContainer;