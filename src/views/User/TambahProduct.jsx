import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { URL_API } from '../../utils';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function TambahProduct(props) {
    const { register, handleSubmit, errors, watch } = useForm();
    const [kategori, setKategori] = useState([])
    const history = useHistory()
    const onSubmit = data => {
        postData(data)
    }

    const getData = async () => {
        try {
            const response = await Axios.get(URL_API + 'allkategori')
            setKategori(response.data.kategoris)
        } catch (error) {

        }
    }

    const postData = async (data) => {
        try {
            const response = await Axios.post(URL_API + 'user/product/simpan',data,{
                headers : {
                    'Accept' : 'application/json',
                    'Authorization' : 'Bearer ' + localStorage.getItem('token')
                }
            })
            console.log(response);
            if(response.status == 200){
                history.replace('/user/product')
            }
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="p-3">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="text-gray-700">Nama Produk</label>
                    <input autoComplete="off" type="text" className="form-control mt-1" placeholder="Nama Produk" name="name" ref={register({ required: 'Mohon isi nama produk' })}
                    />
                    <small className="text-red-400">{errors.name && errors.name.message}</small>
                </div>
                <div className="mb-4">
                    <label className="text-gray-700">Kategori Produk</label>
                    <select name="kategori_id" className="form-control" ref={register({ required: 'Mohon Pilih Kategori' })}>
                        <option value="" selected disabled>Pilih Kategori</option>
                        {
                            kategori.map((item, i) =>
                                <option value={item.id}>{item.name}</option>
                            )
                        }
                    </select>
                    <small className="text-red-400">{errors.kategori_id && errors.kategori_id.message}</small>
                </div>
                <div className="mb-4">
                    <label className="text-gray-700">Deskripsi Produk</label>
                    <textarea autoComplete="off" type="text" className="form-control mt-1" placeholder="Deskripsi Produk" name="description" ref={register({ required: 'Mohon isi Deskripsi Produk' })}
                    >
                    </textarea>
                    <small className="text-red-400">{errors.description && errors.description.message}</small>
                </div>
                <div className="mb-4">
                    <label className="text-gray-700">Harga Produk</label>
                    <input autoComplete="off" type="number" className="form-control mt-1" placeholder="Harga Produk" name="price" ref={register({ required: 'Mohon isi harga produk' })}
                    />
                    <small className="text-red-400">{errors.price && errors.price.message}</small>
                </div>

                <div className="mb-4">
                    <span class="text-gray-700">Kondisi Produk</span>
                    <div class="mt-2">
                        <label class="inline-flex items-center">
                            <input type="radio" class="form-radio" name="kondisi" value="baru" ref={register({ required: 'Mohon pilih kondisi produk' })} />
                            <span class="ml-2">Baru</span>
                        </label>
                        <label class="inline-flex items-center ml-6">
                            <input type="radio" class="form-radio" name="kondisi" value="bekas" ref={register({ required: 'Mohon pilih kondisi produk' })} />
                            <span class="ml-2">Bekas</span>
                        </label>
                    </div>

                    <small className="text-red-400">{errors.kondisi && errors.kondisi.message}</small>
                </div>
                <button className="btn-purple w-full" type="submit">Simpan Produk</button>
            </form>
        </div>
    );
}

export default TambahProduct;