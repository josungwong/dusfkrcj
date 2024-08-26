let initialState = {
    contactList:[],
    searchContack:""
}

function reducer(state = initialState,action){
    const {type,payload} = action
    switch(type){
        case "ADD_CONTACT":
            return {...state,contactList:[...state.contactList,{name:payload.name,phoneNumber:payload.phoneNumber}]}
        case "SEARCH_LIST":
            return {...state,searchContack:payload.searchContack}
        default :
            return {...state}
    }
}

export  default reducer