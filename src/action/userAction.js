export const addUser = (user)=>{
    return {
        type : 'ADD_USER',
        payload : user
    }
}

export const userStatus = (id)=>{
    return{
        type:'USER_STATUS',
        payload: id
    }
}

export const usersActivate = ()=>{
    return{
        type: 'ACTIVATE'
    }
}

export const usersDeactivate = ()=>{
    return {
        type: 'DEACTIVATE'
    }
}

export const deleteUser = (id)=>{
    return {
        type: 'DELETE_USER',
        payload: id
    }
}