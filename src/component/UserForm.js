import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../action/userAction'

const Userform = ()=>{
    const dispatch =useDispatch()

    const [userName , setUserName] = useState('')
    const [active, setActive] = useState(false)

    const handleChange = (e)=>{
        setUserName(e.target.value)
    }
    const handleActive = (e)=>{
        setActive(e.target.checked)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()

        const user = {
            id : Number(new Date()),
            userName : userName,
            active : active
        }
        dispatch(addUser(user))
        setUserName('')
        setActive(false)
    }
    return(
        <div >
            <form onSubmit={handleSubmit} style={{margin: '2rem'}}>
                <label><strong>User Name</strong></label>
                <input type='text' placeholder='Enter username' value={userName} onChange={handleChange} style={{marginRight:'2rem'}}/>
              
                <input type='checkbox' id='active' checked={active} onChange={handleActive} />
                <label htmlFor='active' style={{marginRight:'3rem'}}> <strong>Active</strong></label>
              
                <input type='submit' class="btn btn-primary" style={{marginBottom:'4px'}}/>
            </form>
        </div>
    )
}

export default Userform