import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { imgPlacholder, logo_white, photo } from '../assets/img';
import TopBar from '../component/TopBar';

function Product(props) {
    let { identifier } = useParams();
    let history = useHistory();
    console.log(identifier);

    return (
        <TopBar title="Bantu Masyarakat Kurang Mampu">
            <div>
                <div>
                    <img src={photo} alt="" srcset="" />
                    <div class="px-3 mt-3">
                        <h1 class="text-lg font-semibold text-gray-700">Paket Sayur Sop Enak Pisan Dijamin Pokonamah</h1>
                        <div class="flex flex-col my-2 ">
                            <h1 class="text-md text-biru">Rp 20.000.000 <small className="text-gray-600">Terkumpul dari Rp.500.000.000</small></h1>
                            <input type="range" className="text-sm w-full my-2" />
                        </div>
                        <div class="flex flex-row justify-between ">
                            <h1 class="text-md font-bold text-gray-700">1500 Donasi</h1>
                            <h1 class="text-md font-bold text-gray-700">50 hari lagi</h1>
                        </div>
                        <button className="bg-biru text-white p-2 rounded text-center block w-full mt-2 mb-4 text-xl font-bold">Donasi Sekarang</button>
                    </div>
                    <hr class="divider shadow-inner" />
                    <div class="p-3">
                        <h1 class="text-md font-semibold text-gray-700">Informasi Penggalangan Dana</h1>
                        <div className="p-3 shadow-md">
                            <div class="grid grid-cols-2  mt-4">
                                <div class="col-span-1 flex flex-col">
                                    <span>Penggalang Dana</span>
                                    <div className="flex flex-row mt-3">
                                        <img src={logo_white} class="w-12" alt="" />
                                        <h1 class="text-md font-semibold text-biru ml-3">Kitabisa.com</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="divider shadow-inner" />
                    <div class="p-3">
                        <h1 class="text-lg font-bold text-black mb-3">Donasi ( 1500 )</h1>
                        <div className="flex flex-col">
                            <div className="bg-gray-100 p-4 flex mb-3">
                                <img src={imgPlacholder} className="w-16 h-16"/>
                                <div className="flex flex-col ml-4">
                                    <h1 className="text-biru font-semibold">Anonim</h1>
                                    <span className="text-black text-sm">Donasi 20.000</span>
                                    <small className="text-xs text-gray-500">10 menit yang lalu</small>
                                </div>
                            </div>
                            <div className="bg-gray-100 p-4 flex mb-3">
                                <img src={imgPlacholder} className="w-16 h-16"/>
                                <div className="flex flex-col ml-4">
                                    <h1 className="text-biru font-semibold">Anonim</h1>
                                    <span className="text-black text-sm">Donasi 20.000</span>
                                    <small className="text-xs text-gray-500">10 menit yang lalu</small>
                                </div>
                            </div>
                            <div className="bg-gray-100 p-4 flex mb-3">
                                <img src={imgPlacholder} className="w-16 h-16"/>
                                <div className="flex flex-col ml-4">
                                    <h1 className="text-biru font-semibold">Anonim</h1>
                                    <span className="text-black text-sm">Donasi 20.000</span>
                                    <small className="text-xs text-gray-500">10 menit yang lalu</small>
                                </div>
                            </div>
                            <div className="bg-gray-100 p-4 flex mb-3">
                                <img src={imgPlacholder} className="w-16 h-16"/>
                                <div className="flex flex-col ml-4">
                                    <h1 className="text-biru font-semibold">Anonim</h1>
                                    <span className="text-black text-sm">Donasi 20.000</span>
                                    <small className="text-xs text-gray-500">10 menit yang lalu</small>
                                </div>
                            </div>
                            <div className="bg-gray-100 p-4 flex mb-3">
                                <img src={imgPlacholder} className="w-16 h-16"/>
                                <div className="flex flex-col ml-4">
                                    <h1 className="text-biru font-semibold">Anonim</h1>
                                    <span className="text-black text-sm">Donasi 20.000</span>
                                    <small className="text-xs text-gray-500">10 menit yang lalu</small>
                                </div>
                            </div>
                            <div className="bg-gray-100 p-4 flex mb-3">
                                <img src={imgPlacholder} className="w-16 h-16"/>
                                <div className="flex flex-col ml-4">
                                    <h1 className="text-biru font-semibold">Anonim</h1>
                                    <span className="text-black text-sm">Donasi 20.000</span>
                                    <small className="text-xs text-gray-500">10 menit yang lalu</small>
                                </div>
                            </div>
                            <div className="bg-gray-100 p-4 flex mb-3">
                                <img src={imgPlacholder} className="w-16 h-16"/>
                                <div className="flex flex-col ml-4">
                                    <h1 className="text-biru font-semibold">Anonim</h1>
                                    <span className="text-black text-sm">Donasi 20.000</span>
                                    <small className="text-xs text-gray-500">10 menit yang lalu</small>
                                </div>
                            </div>
                            <div className="bg-gray-100 p-4 flex mb-3">
                                <img src={imgPlacholder} className="w-16 h-16"/>
                                <div className="flex flex-col ml-4">
                                    <h1 className="text-biru font-semibold">Anonim</h1>
                                    <span className="text-black text-sm">Donasi 20.000</span>
                                    <small className="text-xs text-gray-500">10 menit yang lalu</small>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </TopBar>
    );
}

export default Product;