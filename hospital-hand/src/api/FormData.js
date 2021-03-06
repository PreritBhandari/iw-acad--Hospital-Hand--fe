import axios from 'axios'
const token = localStorage.getItem('token')
export default axios.create({
    baseURL:"http://127.0.0.1:8000/",
    headers:{
        'Authorization': `Token ${token}`,
        'content-type': 'multipart/form-data'
    }
})
