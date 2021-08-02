import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, usersActivate, usersDeactivate, userStatus } from '../action/userAction'

const UserList =()=>{
    const usersS = useSelector((state)=>{
        return state.users
    })
    const dispatch = useDispatch()

    const [search, setSearch] = useState('')
    const [users, setusers] = useState([])
  //  const [serachUsers, setSearchUsers] = useState([])

    useEffect(()=>{
        if(search === ''){
            setusers([...usersS])
        }
        else{
            const res = usersS.filter((user)=>{
                return user.userName.includes(search)
            })
            setusers(res)
        }
    },[usersS,search])

    const handleChange = (e)=>{
        const text = e.target.value
        setSearch(text)

       
    }

    const handleActive =(id)=>{
        dispatch(userStatus(id))
    }

    const handleActicate =()=>{
        dispatch(usersActivate())
    }

    const handleDeactivate = ()=>{
        dispatch(usersDeactivate())
    }

    const handleDelete = (id)=>{
        dispatch(deleteUser(id))
    }

    return (
        <div style={{textAlign:'left'}} class = 'border border-dark'>
            <div  class='mx-5 my-5'>
                <div className='row'>
                    <h2 className='col-7' style={{marginLeft:'4rem'}}>Listing users:</h2>
                    <div className='col'>
                    <input  type='text' placeholder='Search' value={search} onChange={handleChange} style={{width:'18rem'}} />
                    </div>
                </div>
            
                <ul style={{ margin : '3rem', textAlign:'left'}} >
                   
                    {users.map((user) => {
                        return <h3 key={user.id} style={{ margin : '1rem'}}>
                                <input type='checkbox' checked={user.active}  onChange={()=>handleActive(user.id)} /> 
                                <label>{user.userName} </label> 
                                <button onClick={()=>handleDelete(user.id)} class="btn btn-dark">Delete</button></h3>
                    })}
                    
                </ul>
                <div style={{textAlign:'left'}}>
                <button onClick={handleDeactivate} class="btn btn-danger" style={{marginRight:'2rem'}}>Deactivate All</button><button onClick={handleActicate} class="btn btn-success">Activate All</button>
            </div>
            </div>
        </div>
    )
}

export default UserList