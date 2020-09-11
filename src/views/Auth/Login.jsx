import React, { useState } from 'react';
import { logo_white, svgGoogle } from '../../assets/img';
import Axios from 'axios';
import { URL_API } from '../../utils';
import { useFormContext, useForm, useWatch } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';


function Login(props) {
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        postUser(data)
    }

    const postUser = async (data) => {
        try {
            const response = await Axios.post(URL_API + 'login', data, {
                headers: {
                    'Accept': 'application/json'
                }
            })
            localStorage.setItem('token',response.data.token);
            history.replace('/')     
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex">
            <div className="w-full md:w-1/3 bg-white shadow-2xl mx-auto">
                <div className="flex flex-col justify-center px-4 ">
                    <div className="w-full px-20 pt-16 md:px-28">
                        <a href="home.html"><img src={logo_white} /></a>
                    </div>
                    <div id="register">
                        <p className="mt-5 text-gray-700 text-sm text-center">Silahkan masuk untuk mengakses aplikasi.</p>
                        <div className="mt-10">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-4">
                                    <label className="text-gray-700">Alamat Email</label>
                                    <input type="text" className="form-control mt-1" placeholder="Alamat Email" name="email"
                                     ref={register({
                                        required: 'Mohon isi alamat email', pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "invalid email address"
                                        }
                                    })} />
                                    <small className="text-red-400">{errors.email && errors.email.message}</small>
                                </div>
                                <div className="mb-4">
                                    <label className="text-gray-700">Kata Sandi</label>
                                    <input type="password" className="form-control mt-1" placeholder="Kata Sandi" 
                                    name="password"
                                    ref={register({
                                        required: 'Mohon isi katasandi', minLength: {
                                            value : 8,
                                            message: "Panjang kata sandi minimal 8 digit"
                                        }
                                    })} />
                                    <small className="text-red-400">{errors.password && errors.password.message}</small>
                                </div>
                                <div className="mb-4">
                                    <a href="" className="text-purple-500">Lupa kata sandi ?</a>
                                </div>
                                <div className="mb-4">
                                    <button className="btn-purple w-full" type="submit">Masuk</button>
                                </div>
                            </form>
                        </div>
                        <hr className="my-6 md:my-8" />
                        <Link to="/register" className="btn-secondary text-gray-700 block  mb-5">
                            <div className="flex justify-center gap-2">
                                <span>Belum punya akun ? Daftar</span>
                            </div>
                        </Link>
                        <div className="text-center">
                        <Link to="/" className="text-purple-500">Kembali ke halaman utama</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;