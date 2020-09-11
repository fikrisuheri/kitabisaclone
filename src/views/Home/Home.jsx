import React from 'react';
import { logo_white, sayurPhoto } from '../../assets/img';
import Slider from './Slider';
import Category from './Category';
import Product from './Product';


function Home(props) {
    
    const datas = [
        { 
            title : 'Produk Terbaru',
            data : [
                {name: 'Paket Sop', price: 'Rp 20,000', img: sayurPhoto , url : '/product/detail/paket-sop-ngenah' },
                {name: 'Paket Sop', price: 'Rp 20,000', img: sayurPhoto , url : '/product/detail/paket-sop-ngenah' },
                {name: 'Paket Sop', price: 'Rp 20,000', img: sayurPhoto , url : '/product/detail/paket-sop-ngenah' },
                {name: 'Paket Sop', price: 'Rp 20,000', img: sayurPhoto , url : '/product/detail/paket-sop-ngenah' },
            ]
        },
        {
            title : 'Buat Kamu Yang Lapar',
            data : [
                {name: 'Paket Sop', price: 'Rp 20,000', img: sayurPhoto , url : '/product/detail/paket-sop-ngenah' },
                {name: 'Paket Sop', price: 'Rp 20,000', img: sayurPhoto , url : '/product/detail/paket-sop-ngenah' },
                {name: 'Paket Sop', price: 'Rp 20,000', img: sayurPhoto , url : '/product/detail/paket-sop-ngenah' },
                {name: 'Paket Sop', price: 'Rp 20,000', img: sayurPhoto , url : '/product/detail/paket-sop-ngenah' },
            ]
        },
        {
            title : 'Daging Ayam',
            data : [
                {name: 'Paket Sop', price: 'Rp 20,000', img: sayurPhoto , url : '/product/detail/paket-sop-ngenah' },
                {name: 'Paket Sop', price: 'Rp 20,000', img: sayurPhoto , url : '/product/detail/paket-sop-ngenah' },
                {name: 'Paket Sop', price: 'Rp 20,000', img: sayurPhoto , url : '/product/detail/paket-sop-ngenah' },
                {name: 'Paket Sop', price: 'Rp 20,000', img: sayurPhoto , url : '/product/detail/paket-sop-ngenah' },
            ]
        }
    ]
    console.log(datas)
    console.log(localStorage.getItem('token'))
    return (
        <div>
            <nav className="w-full bg-purple-500 py-3 px-2">
                <img src={logo_white} alt="" className="w-24" srcset="" />
            </nav>
            <Slider />
            <Category />
            <hr className="divider" />
            {
                datas.map((item, i) =>
                    <Product props={{
                        title: item.title,
                        data: item.data
                    }} />
                )
            }
        </div>
    );
}

export default Home;