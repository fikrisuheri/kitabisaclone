import Axios from 'axios'

export const getKategori = url => ({
    type : 'GET_KATEGORI',
    payload : Axios.get(url)
})