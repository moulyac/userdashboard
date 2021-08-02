const userInitialState = []

const userReducer = (state = userInitialState, action)=>{
    switch(action.type){
        case 'USER_STATUS' : {
            return state.map((user)=>{
                if(user.id === action.payload){
                    return {...user,active:!user.active}
                }
                else{
                    return {...user}
                }
            })
        }

        case 'ADD_USER' : {
            return [...state,{...action.payload}]
        }

        case 'ACTIVATE' : {
            return state.map((user)=>{
                return {...user,active:true}
            })
        }

        case 'DEACTIVATE' : {
            return state.map((user)=>{
                return {...user,active:false}
            })
        }

        case 'DELETE_USER' : {
            return state.filter((user)=>{
                return user.id !== action.payload
            })
        }

        default : {
            return [...state]
        }
    }
}

export default userReducer