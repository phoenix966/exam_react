import * as postAction from './ActionsTypes'
import axios from  '../../myAxiosInstance.js'
import firebase from '../../config/firebaseConfig'
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
export const loginTo = ()=>{
    return {
        type: postAction.LOGIN
    }
}
export const logOut = ()=>{
    return {
        type: postAction.LOG_OUT
    }
}
export const editOn = ()=>{
    return {
        type: postAction.EDIT_ON
    }
}
export const editOff = ()=>{
    return {
        type: postAction.EDIT_OFF
    }
}
export const addId = (id)=>{
    return {
        type: postAction.ADD_ID,
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


export const removePost =(id,imgName)=>{
    return (dispatch) =>{
        dispatch(postRequest())
        axios.delete(`/blog/${id}.json`)
        .then(()=>{
            dispatch(postRemove(id))
        }).then(()=>{
            const storageRef = firebase.storage().ref('images/' + imgName)
                storageRef.delete()
                .then(function() {
                    // console.log('Удалено');
                })
                .catch(function(err) {
                    console.log(err);
                })
        })
        
    }
}