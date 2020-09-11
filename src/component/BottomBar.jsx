import React from 'react';
import {  NavLink } from 'react-router-dom';

function BottomBar({children}) {
    return (
       <div className="bg-abu">
            <div className="w-full md:w-1/3 bg-white mx-auto">
            <div className="w-full h-full pb-20">
            <section id="content">
                { children }
            </section>
                <section id="bottom-navigation" className="bottom-nav">
                    <div className="flex">
                        <div className="w-full md:w-1/3 mx-auto bg-white ">
                            <div id="tabs" className="bottom-nav-tab ">
                                <NavLink exact to="/"  className="text-gray-600 focus:text-biru hover:text-biru bottom-nav-item">
                                    <ion-icon name="heart-outline" class="text-2xl"></ion-icon>
                                    <span class="tab tab-home block text-xs">Donasi</span>
                                </NavLink>
                                <NavLink exact to="/detail"  className="text-gray-600 focus:text-biru hover:text-biru bottom-nav-item">
                                    <ion-icon name="home-outline" class="text-2xl"></ion-icon>
                                    <span class="tab tab-home block text-xs">Galang Dana</span>
                                </NavLink>
                                <NavLink exact to="/welcome"  className="text-gray-600 focus:text-biru hover:text-biru bottom-nav-item">
                                    <ion-icon name="home-outline" class="text-2xl"></ion-icon>
                                    <span class="tab tab-home block text-xs">Akun</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
       </div>
    );
}

export default BottomBar;