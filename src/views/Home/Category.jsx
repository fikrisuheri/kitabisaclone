import React, { Fragment, useState, useEffect } from 'react';
import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sayur, sayurPhoto } from '../../assets/img';
import { useSelector, useDispatch } from 'react-redux';
import { getKategori } from '../../store/action/kategoris';
import { URL_API, URL_ASSETS } from '../../utils';
import { getUser } from '../../store/action/auth';


function Category(props) {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const kategoris = useSelector((state) => state.Kategori)

    const getData = async () => {
        try {
            const response = await dispatch(getKategori(URL_API + 'kategori'))
            setIsLoading(false)
        } catch (error) {

        }
    }


    useEffect(() => {
        getData()
    }, [])
    return (
        <Fragment>
            <div class="p-3">
                <h1 class="font-bold text-gray-800 text-lg subpixel-antialiased">Mau belanja apa hari ini ?</h1>
            </div>
            <div className="grid grid-cols-4 gap-3">
                {
                    isLoading
                        ?
                        <div>Mencari Data</div>
                        :
                        kategoris.kategoris.kategoris.map((item, i) =>
                            <div className="card-category" key={i}>
                                <img src={`${URL_ASSETS}${item.icon}`} alt="" srcset="" />
                                <span class="text-xs mt-1">{item.name}</span>
                            </div>
                        )
                }
                <div className="card-category">
                    <img src={sayur} alt="" srcset="" />
                    <span class="text-xs mt-1">Lihat Semua</span>
                </div>
            </div>
        </Fragment>
    );
}

export default Category;