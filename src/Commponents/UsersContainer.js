import React,{useState} from 'react'
import User from "./User";

const getUsers=()=>{
    return fetch('https://randomuser.me/api/')
    .then(rest=>rest.json())
    
}
const afficheUsers=(tab)=>{
    let k=[];
    for(let i=0;i<tab.length;i++){
        k.push(<User/>);
    }
    return k;
}
function UsersContainer(props){
    const [users,setUsers]=useState([]);

    getUsers()
    .then(data=>{
        setUsers(data);
        console.log(users);
    })

    return(
        <div className="row">
            {
                afficheUsers(users)
            }
        </div>
    )
}
export default UsersContainer;