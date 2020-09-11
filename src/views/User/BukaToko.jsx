import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { URL_API } from '../../utils';
import { useHistory } from 'react-router-dom';

function BukaToko(props) {
    const { register, handleSubmit, errors, watch } = useForm();
    const [usernameErr, setUsernameErr] = useState('')
    const [sudah, setSudah] = useState('')
    const history = useHistory()
    const onSubmit = data => {
        postToko(data)
    }
    console.log(history)
    const setError = data => setUsernameErr(data)
    const setError2 = data => setSudah(data)

    const postToko = async (data) => {
        try {
            const config = {
                headers : {
                    'Accept' : 'application/json',
                    'Authorization' : 'Bearer ' + localStorage.getItem('token')
                }
            }
            const response = await Axios.post(URL_API+'user/bukatoko',data,config);
            history.push('/user/bukatoko/success')
        } catch (error) {
            if(error.response.data.sudah){
                setError2(error.response.data.errors)
            }else{
                setError(error.response.data.errors)
            }
        }
    }

    return (
        <div className="p-3">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                    <label className="text-gray-700">Buat Username</label>
                    <input autoComplete="off" type="text" className="form-control mt-1" placeholder="Buat Username" name="username" ref={register({ required: 'Mohon isi usename' })}
                    />
                    <small className="text-red-400">{errors.username && errors.username.message}</small>
                    <small className="text-red-400">{ usernameErr != '' ? 'Usename Telah Digunakan' : '' }</small>
                </div>
                <div className="mb-4">
                    <label className="text-gray-700">Nama Toko</label>
                    <input autoComplete="off" type="text" className="form-control mt-1" placeholder="Nama Toko" name="toko_name" ref={register({ required: 'Mohon isi nama toko' })}
                    />
                    <small className="text-red-400">{errors.toko_name && errors.toko_name.message}</small>
                </div>
                <div className="mb-4">
                    <label className="text-gray-700">Nomor Whatsapp</label>
                    <input autoComplete="off" type="text" className="form-control mt-1" placeholder="Nomor Whatsapp" name="no_wa" ref={register({ required: 'Mohon isi nomor whatsapp', pattern: {
                                            value: /^[0-9]+$/i,
                                            message: "Harus berupa angka dan di awali 62"
                                        } })}
                    />
                    <small className="text-red-400">{errors.no_wa && errors.no_wa.message}</small>
                </div>
                <div className="mb-4">
                    <label className="text-gray-700">Alamat Toko</label>
                    <input autoComplete="off" type="text" className="form-control mt-1" placeholder="Alamat Toko" name="alamat" ref={register({ required: 'Mohon isi alamat toko' })}
                    />
                    <small className="text-red-400">{errors.alamat && errors.alamat.message}</small>
                </div>
                <small className="text-red-400">{ sudah != '' ? 'Anda telah bergabung menjadi mitra' : '' }</small>
                <button className="btn-purple w-full" type="submit">Daftarkan Toko</button>
            </form>
        </div>
    );
}

export default BukaToko;