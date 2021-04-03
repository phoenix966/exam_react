import * as postAction from '../actions/ActionsTypes'

const initialState = {
    blogs: [],
    loading: false,
    bigPost: [],
    auth: false,
    editToggle: false,
    editId: null
}

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case postAction.POST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case postAction.POST_SUCCESS:
            if(!action.data) return {...state, loading: false}
            return {
                ...state,
                loading: false,
                blogs: Object.keys(action.data).map(key => {
                    return {
                        ...action.data[key],
                        id: key
                    }
                })
                
            }
        case postAction.POST_REMOVE:
            return {
                ...state,
                blogs: state.blogs.filter((item)=>{
                    return item.id !== action.id
                }),
                loading: false
            }
        case postAction.POST_READ_MORE:
            return {
                ...state,
                bigPost: state.blogs.filter((item)=>{
                    return item.id === action.id        
                })
        }
        case postAction.LOGIN:
            return {
                ...state,
                auth: true
            }
        case postAction.LOG_OUT:
            return {
                ...state,
                auth: false
            }
        case postAction.EDIT_ON:
            return {
                ...state,
                editToggle: true
            }
        case postAction.EDIT_OFF:
            return {
                ...state,
                editToggle: false
            }
        case postAction.ADD_ID:
            return{
                ...state,
                editId: action.id
            }
        default:
            return state
    }
}

export default reducer;