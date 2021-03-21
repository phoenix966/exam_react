import axios from 'axios'

const instance = axios.create({
    baseURL:"https://exam-6e12f-default-rtdb.firebaseio.com/"
});

export default instance;