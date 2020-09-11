import Axios from 'axios'

export const getUser = (url,token) => ({
    type : 'GET_USER',
    payload : Axios.get(url,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    })
})