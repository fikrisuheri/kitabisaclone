import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { logo_white, photo, sayurPhoto } from '../../assets/img';
import Slider from './Slider';


function Home(props) {

    return (
        <div>
            <nav className="grid grid-cols-10 w-full bg-biru py-3 px-2">
                <div className="col-span-1">
                    <img src={logo_white} alt="" className="w-8 h-8" srcset="" />
                </div>
                <div className="col-span-9 px-2">
                    <input type="text" className="bg-biru-muda w-full placeholder-white py-2 px-3 rounded-full text-sm" placeholder="cari yang ingin kamu bantu" />
                </div>
            </nav>
            <div className="p-3 flex flex-col">
                <h1 className=" text-lg font-semibold text-black">Ingin Menggalang Dana ?</h1>
                <button className="btn-biru mt-4 text-lg font-bold">
                    Galang Dana Sekarang
                </button>
                <button className="btn-biru-outline mt-4 text-lg font-bold">
                    Galang Dana Sekarang
                </button>
            </div>
            <hr className="bg-abu h-2 outline-none my-2" />
            <div className="px-3 py-2">
                <Slider />
            </div>
            <hr className="bg-abu h-2 outline-none my-2" />
            <div className="p-3">
                <h1 className=" text-sm font-semibold text-black">Penggalangan Dana Mendesak ?</h1>
            </div>
            <div className="flex p-3">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                >
                    <SwiperSlide>
                        <Link to="/detail">
                            <div class="mb-2 shadow-md">
                            <img src={photo} alt="" srcset="" />
                            <div className="p-2">
                                <p className="text-sm">Bantu warga kurang mampu</p>
                                <input type="range" className="text-sm w-full my-2"/>
                                <div className="flex flex-row justify-between">
                                    <small>Rp.70.000.000</small>
                                    <small>40 hari lagi</small>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/detail">
                            <div class="mb-2 shadow-md">
                            <img src={photo} alt="" srcset="" />
                            <div className="p-2">
                                <p className="text-sm">Bantu warga kurang mampu</p>
                                <input type="range" className="text-sm w-full my-2"/>
                                <div className="flex flex-row justify-between">
                                    <small>Rp.70.000.000</small>
                                    <small>40 hari lagi</small>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to="/detail">
                            <div class="mb-2 shadow-md">
                            <img src={photo} alt="" srcset="" />
                            <div className="p-2">
                                <p className="text-sm">Bantu warga kurang mampu</p>
                                <input type="range" className="text-sm w-full my-2"/>
                                <div className="flex flex-row justify-between">
                                    <small>Rp.70.000.000</small>
                                    <small>40 hari lagi</small>
                                </div>
                            </div>
                        </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Home;