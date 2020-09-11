import React, { useEffect } from 'react';
import { avatar } from '../../assets/img';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../store/action/auth';
import { URL_API } from '../../utils';
import Axios from 'axios';

function User(props) {
    const user = useSelector(state => state.Auth.user)
    const history = useHistory()
    const dispatch = useDispatch()
    const getMyUser = async () => {
        try {
            const token = localStorage.getItem('token')
            const response = await dispatch(getUser(URL_API + 'user', token))
        } catch (error) {

        }
    }

    const logout = async () => {
        try {
            const config = {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }
            const response = await Axios.post(URL_API + 'logout', {}, config)
            localStorage.clear()
            history.push('/login')
        } catch (error) {

        }
    }

    useEffect(() => {
        getMyUser()
    }, [])
    return (
        <div className="">
            <div className="bg-white p-3 mt-3">
                {
                    localStorage.getItem('token')
                        ?
                        <div class="flex flex-col">
                            <div className="h-48">

                            </div>
                            <div>
                                {
                                    user.toko_name == null || user.toko_name == ''
                                        ?
                                        <Link to="/user/bukatoko" className="w-full text-xl text-gray-700"> <i class="fa fa-shopping-bag text-purple-500 text-xl" aria-hidden="true"></i> Buka Toko</Link>
                                        :
                                        <Link to="/user/product" className="w-full text-xl text-gray-700"> <i class="fa fa-shopping-bag text-purple-500 text-xl" aria-hidden="true"></i> Produk saya</Link>
                                }
                            </div>
                            <hr className="my-3" />
                            <Link to="/user/bukatoko" className="w-full text-xl text-gray-700"> <i class="fa fa-question-circle text-purple-500 text-xl" aria-hidden="true"></i> Bantuan</Link>
                            <hr className="my-2" />
                            <Link to="/user/bukatoko" className="w-full text-xl text-gray-700"> <i class="fa fa-info-circle text-purple-500 text-xl" aria-hidden="true"></i> Tentang Pasar GO</Link>
                            <hr className="my-2" />
                            <Link to="/user/bukatoko" className="w-full text-xl text-gray-700"> <i class="fa fa-file text-purple-500 text-xl" aria-hidden="true"></i> Syarat Dan Ketentuan</Link>
                            <hr className="my-2" />
                            <Link onClick={logout} className="w-full text-xl text-gray-700"> <i class="fa fa-sign-out text-red-500 text-2xl" aria-hidden="true"></i> Logout</Link>
                        </div>
                        :
                        <div className="flex flex-col mt-6">
                            <Link to="/register" className="w-full text-xl text-gray-700"> <i class="fa fa-user-plus text-purple-500 text-xl" aria-hidden="true"></i> Daftar</Link>
                            <hr className="my-2" />
                            <Link to="/login" className="w-full text-xl text-gray-700"> <i class="fa fa-sign-in text-purple-500 text-xl" aria-hidden="true"></i> Masuk</Link>
                            <hr className="h-2 bg-gray-300 outline-none my-3" />
                            <Link to="/user/bukatoko" className="w-full text-xl text-gray-700"> <i class="fa fa-question-circle text-purple-500 text-xl" aria-hidden="true"></i> Bantuan</Link>
                            <hr className="my-2" />
                            <Link to="/user/bukatoko" className="w-full text-xl text-gray-700"> <i class="fa fa-info-circle text-purple-500 text-xl" aria-hidden="true"></i> Tentang Pasar GO</Link>
                            <hr className="my-2" />
                            <Link to="/user/bukatoko" className="w-full text-xl text-gray-700"> <i class="fa fa-file text-purple-500 text-xl" aria-hidden="true"></i> Syarat Dan Ketentuan</Link>
                        </div>
                }
            </div>
        </div>
    );
}

export default User;