import React from 'react'
import User from "./User";


class UsersContainer extends React.Component{
    constructor(props) {
        super(props)
        this.tab=[];
        this.state={
            results:[]
        }
    }
    getUsers=()=>{
        fetch('https://randomuser.me/api?results=10')
        .then(rest=>rest.json())
        .then(data=>{
            this.setState({results:data.results})
        })
        
    }
    afficheUsers=()=>{
        console.log("son type:", this.state.results[0]);
        let k=[];

        for(let i=0;i<10;i++){
            //console.log(this.state.results[i]);
            let d=this.state.results[i];
            console.log("voici d:",d);
            let v=<User don={d} key={d}/>;
            k.push(v);
        }
        return k;
    }
    kk(){
        let l=[]
        this.state.results.forEach(item=>{
            console.log(item);
             l.push(<User don={item} key={item.id}/>)
         })
         return l;
    }
    componentDidMount(){
        this.getUsers();
    }
   
    render(){
       // console.log("voiciles données",this.state.results);
       //this.getUsers()
       
        return(
            <div className="row">
                
               
                {
                    this.afficheUsers()
                    /*this.state.results.forEach(item=>{
                       //console.log(item);
                       this.tab.push(<User don={item} key={item.id}/>)
                    })*/
                  
                }
                {
                    this.tab
                }
                
            </div>
        )
    }
    
}
export default UsersContainer;