import * as postAction from '../actions/ActionsTypes'

const initialState = {
    blogs: [],
    loading: false,
    bigPost: []
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
                blogs: Object.keys(action.data).map(key => { // {fsdfdsfs: {}, dkfskflksd: {}}
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
                    if(item.id === action.id){
                        return item
                    }
                })
        }
        

        default:
            return state
    }
}

export default reducer;