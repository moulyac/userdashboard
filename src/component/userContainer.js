import React from 'react'
import Userform from './UserForm'
import UserList from './UserList'

const UserContainer = ()=>{
    return (
        <div style={{textAlign:'center'}}>
        
           <h1 >User Dashboard</h1> 
           <Userform/>
           <UserList/>
        </div>
    )
}

export default UserContainer