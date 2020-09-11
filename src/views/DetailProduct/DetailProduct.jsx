import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function Product(props) {
    let { identifier } = useParams();
    let history = useHistory();
    console.log(identifier);

    return (
        <div>
            <div>
                <img src="img/Sop.jpg" alt="" srcset="" />
                <div class="px-3 mt-3">
                    <h1 class="text-lg font-semibold text-gray-700">Paket Sayur Sop Enak Pisan Dijamin Pokonamah</h1>
                    <div class="flex flex-row justify-between">
                        <h1 class="text-2xl text-purple-500">Rp 20,000</h1>
                        <span class="text-4xl text-gray-500 hover:text-red-500 duration-200" title="Favorit"><ion-icon name="heart"></ion-icon></span>
                    </div>
                </div>
                <hr class="divider shadow-inner" />
                <div class="p-3">
                    <h1 class="text-md font-semibold text-gray-700">Deskripsi Produk</h1>
                    <div class="text-sm text-gray-700 font-light mt-1">
                        <p>Paket sayur sop enak berisi wortel,kol,kentang cocok untuk yang sedang diet.Kesegeran sayur masih terasa karena di import langsung dari para petani</p>
                    </div>
                </div>
                <hr class="divider shadow-inner" />
                <div class="p-3">
                    <h1 class="text-md font-semibold text-gray-700">Informasi Toko</h1>
                    <div class="grid grid-cols-2  mt-4">
                        <div class="col-span-1 flex">
                            <img src="img/rounded-logo.png" class="w-12" alt="" />
                            <h1 class="text-md font-semibold text-gray-700 ml-3">Pasar GO</h1>
                        </div>
                        <div class="col-span-1 text-right">
                            <a href="" class="rounded bg-white border-2 text-purple-700 border-purple-500 px-3 py-1 inline-block align-middle hover:text-white hover:bg-purple-500 duration-200 text-sm">Lihat Toko</a>
                        </div>
                    </div>
                    <div class="flex mt-3">
                        <span class="text-xl"><ion-icon name="map-outline"></ion-icon></span>
                        <h1 class="text-sm font-light text-gray-700 ml-2">Kawali,Ciamis</h1>
                    </div>
                    <div class="flex">
                        <span class="text-xl"><ion-icon name="basket-outline"></ion-icon></span>
                        <h1 class="text-sm font-light text-gray-700 ml-2">20 Produk</h1>
                    </div>
                    <div class="flex">
                        <span class="text-xl"><ion-icon name="map-outline"></ion-icon></span>
                        <h1 class="text-sm font-light text-gray-700 ml-2">Kawali,Ciamis</h1>
                    </div>
                    <div class="flex">
                        <span class="text-xl"><ion-icon name="mail-outline"></ion-icon></span>
                        <h1 class="text-sm font-light text-gray-700 ml-2">suhericode@gmail.com</h1>
                    </div>

                </div>
            </div>
            <div class="w-full md:w-1/3 mx-auto bg-white p-3 block fixed inset-x-0 bottom-0 z-10 flex flex-row justify-between gap-3 shadow-2xl">
                <a href="" class="font-bold text-sm md:text-base btn-secondary text-purple-500 block w-full">Bagikan</a>
                <a href="" class="font-bold text-sm md:text-base btn-purple block w-full">Order via Whatsapp</a>
            </div>
        </div>
    );
}

export default Product;