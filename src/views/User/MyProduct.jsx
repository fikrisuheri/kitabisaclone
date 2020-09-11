import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { svgShop, imgPlacholder } from '../../assets/img';
import AOS from 'aos';
import Axios from 'axios';
import { URL_API, URL_ASSETS } from '../../utils';
import TopBar from '../../component/TopBar';


function MyProduct(props) {
    const [isLoading, setIsLoading] = useState(true)
    const [product, setProduct] = useState([])
    const history = useHistory()
    const getMyProduct = async () => {
        try {
            const response = await Axios.get(URL_API + 'user/product', {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            setIsLoading(false)
            setProduct(response.data.produk)
            console.log(response)
        } catch (error) {

        }
    }

    useEffect(() => {
        getMyProduct()
        console.log(history)
    }, [])

    AOS.init({
        startEvent: 'DOMContentLoaded',
        once: true
    });
    return (
        <TopBar title="Produk Saya">
            <div className="p-3">
                {
                    isLoading
                        ?
                        <p>Sedang Mengambil Data</p>
                        :
                        product.length > 0
                            ?
                            <div>
                                {
                                    product.map((item, i) =>
                                        <Link to={{ 
                                            pathname : '/user/product/detail',
                                            state : item.slug
                                         }}>
                                            <div className="my-3 bg-purple-100 p-3 rounded-md flex-row flex">
                                                <img src={item.produk_foto.length < 1 ? imgPlacholder : URL_ASSETS + item.produk_foto[0].photo} className="w-16 h-16 object-fit" />
                                                <div className="ml-3 flex justify-between">
                                                    <div className="flex flex-col">
                                                        <span className="text-sm text-gray-700">{item.name}</span>
                                                        <span className="text-md font-semibold text-purple-700">Rp {item.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }
                                <div className=" w-full md:w-1/3 mx-auto lock fixed inset-x-0 bottom-0 z-10 p-5 text-right">
                                    <button onClick={() => history.push('/user/product/tambah')} className=" bg-purple-700 text-white py-3 px-5 rounded-full text-center"><i className="fa fa-plus"></i></button>
                                </div>
                            </div>
                            :
                            <div>
                                <div className="flex flex-col justify-center pb-16 px-16 text-center ">
                                    <img src={svgShop} className="self-center md:mt-0" data-aos="zoom-in" data-aos-duration="500" />
                                </div>
                                <div className="flex flex-col text-center px-4 mt-4">
                                    <h1 className="text-2xl font-bold font-sans mt-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">Ooops !</h1>
                                    <p className="text-xm text-gray-600" data-aos="fade-up" data-aos-duration="550" data-aos-delay="400">Kamu belum punya produk, yuk klik tombol tambah produk untuk menambahkan produk kamu</p>
                                    <button onClick={() => history.push('/user/product/tambah')} className="btn-purple w-1/2 self-center mt-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">Tambah Produk</button>
                                </div>
                            </div>
                }
            </div>
        </TopBar>
    );
}

export default MyProduct;