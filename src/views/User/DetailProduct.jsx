import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Axios from 'axios';
import { URL_API } from '../../utils';
import TopBar from '../../component/TopBar';
import { imgPlacholder } from '../../assets/img';
import { useForm } from 'react-hook-form';

function DetailProduct(props) {
    const { register, handleSubmit, errors, watch } = useForm();
    const [product, setProduct] = useState([]);
    const [foto, setFoto] = useState([]);
    const [fotoUpload, setFotoUpload] = useState([]);
    const history = useHistory()

    const onSubmit = () => {
        postPhoto(fotoUpload)
    }

    const postPhoto = async (data) => {
        
        try {
            const token = localStorage.getItem('token')
            const body = new FormData()
            body.append('id', product.id)
            body.append('photo', data)
            
            const response = await Axios.post(`${URL_API}user/productfoto/upload`, body, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization' : `Bearer ${token}`
                }
            })

            console.log(response)

        } catch (error) {

        }



    }

    const getProduct = async () => {
        try {
            const response = await Axios.get(URL_API + 'user/product/' + history.location.state, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            setProduct(response.data.produk)
            setFoto(response.data.foto)

        } catch (error) {

        }
    }
    useEffect(() => {
        getProduct()
    }, [])

    return (
        <TopBar title="Detail Produk">
            <div className="p-3 flex flex-col">
                <span className="text-sm text-gray-600 font-sans">Nama Produk : {product.name} </span>
                <hr className="my-2" />
                <span className="text-sm text-gray-600 font-sans">Deskripsi Produk : {product.description} </span>
                <hr className="my-2" />
                <span className="text-sm text-gray-600 font-sans">Harga Produk : {product.price} </span>
                <hr className="my-2" />
                <span className="text-sm text-gray-600 font-sans">Kategori Produk : {product.kategori_id} </span>
                <hr className="my-2" />
                <div className="flex gap-2 justify-end">
                    <button className=" bg-green-600 text-white py-1 px-2 rounded text-center text-sm">Edit Produk</button>
                    <button className=" bg-red-600 text-white py-1 px-2 rounded text-center text-sm">Hapus Produk</button>
                </div>
                <h1 className="text-xl font-semibold text-gray-700 mt-3">Foto Produk</h1>
                {
                    foto.length > 0
                        ?
                        <div></div>
                        :
                        <div className="self-center mt-5 flex flex-col gap-2 text-center">
                            <img src={imgPlacholder} alt="" />
                            <small>Kamu belum menambah foto produk</small>
                                <input multiple type="file" name="photo" className="form-control my-3" placeholder="Pilih foto produk" onChange={(e) => setFotoUpload(e.target.value)}/>
                                <small className="text-red-400 mb-1">{errors.photo && errors.photo.message}</small>
                                <button onClick={onSubmit} className="bg-purple-600 block w-full text-white p-2 rounded text-center text-sm">Upload Foto</button>
                        </div>
                }
            </div>
        </TopBar>
    );
}

export default DetailProduct;