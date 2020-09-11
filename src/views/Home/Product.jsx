import React, { Fragment } from 'react';
import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../../component/ProductCard';

function Product({ props }) {
    return (
        <Fragment>
            <div class="p-3 flex justify-between align-middle">
                <h1 class="font-bold text-gray-800 text-lg subpixel-antialiased">{props.title}</h1>
                <a href="#" class="font-semibold text-purple-500 text-sm subpixel-antialiased">Lihat Semua</a>
            </div>
            <div className="p-3">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}>
                    {
                        props.data.map((item) =>
                            <SwiperSlide>
                                <ProductCard props={{
                                    img: item.img,
                                    name: item.name,
                                    price: item.price,
                                    url : item.url
                                }} />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </Fragment>
    );
}

export default Product;