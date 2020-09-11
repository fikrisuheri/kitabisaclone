import React from 'react';
import { svgRocket, svgHero } from '../../assets/img';
import { Link } from 'react-router-dom';
import AOS from 'aos';

const SuccessToko = (props) => {
    AOS.init({
        startEvent: 'DOMContentLoaded',
        once: true
      });
    return (
        <div className="flex">
            <div className="w-full h-screen md:w-1/3 bg-white shadow-2xl mx-auto">
                <div className="flex flex-col justify-center pt-16 px-16 text-center ">
                    <img src={svgHero} className="self-center mt-4 md:mt-0"  data-aos="zoom-in" data-aos-duration="500" />
                </div>
                <div className="flex flex-col text-center px-4 mt-4">
                    <h1 className="text-2xl font-bold font-sans mt-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">Berhasil !</h1>
                    <p className="text-xm text-gray-600" data-aos="fade-up" data-aos-duration="550" data-aos-delay="400">Selamat anda telah menjadi mitra Pasar GO</p>
                    <Link to="/user" className="btn-purple w-1/2 self-center mt-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600">Lanjutkan</Link>
                </div>
            </div>
        </div>
    );
}

export default SuccessToko;