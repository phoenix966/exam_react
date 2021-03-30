import * as postAction from './ActionsTypes'
import axios from  '../../myAxiosInstance.js'
// 1
const postRequest = ()=>{
    return {
        type: postAction.POST_REQUEST
    }
}
//2
const postSuccess = (data)=>{
    return {
        type: postAction.POST_SUCCESS,
        data
    }
}

const postRemove = (id)=>{
    return {
        type: postAction.POST_REMOVE,
        id
    }
}
export const postReadMore = (id)=>{
    return {
        type: postAction.POST_READ_MORE,
        id
    }
}
// 1 + 2 ASYNC with thunk
export const getPosts = ()=>{
    return (dispatch) => {
        dispatch(postRequest())
        axios.get('/blog.json').then(response=>{
            dispatch(postSuccess(response.data))
        })
    }
}


export const removePost =(id)=>{
    return (dispatch) =>{
        dispatch(postRequest())
        axios.delete(`/blog/${id}.json`).then(()=>{
            dispatch(postRemove(id))
        })
    }
}