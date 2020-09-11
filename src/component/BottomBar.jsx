import React from 'react';
import {  NavLink ,Link} from 'react-router-dom';

function BottomBar({children}) {
    return (
        <div className="w-full md:w-1/3 bg-white mx-auto">
            <div className="w-full h-full pb-20">
            <section id="content">
                { children }
            </section>
                <section id="bottom-navigation" className="bottom-nav">
                    <div className="flex">
                        <div className="w-full md:w-1/3 mx-auto bg-white ">
                            <div id="tabs" className="bottom-nav-tab ">
                                <NavLink exact to="/"  className="text-gray-600 focus:text-purple-500 hover:text-purple-500 bottom-nav-item">
                                    <ion-icon name="home-outline" class="text-2xl"></ion-icon>
                                    <span class="tab tab-home block text-xs">Home</span>
                                </NavLink>

                                <NavLink  to="welcome" className="text-gray-600 focus:text-purple-500 hover:text-purple-500 bottom-nav-item">
                                    <ion-icon name="search-outline" class="text-2xl"></ion-icon>
                                    <span class="tab tab-kategori block text-xs">Cari</span>
                                </NavLink>
                                <a href="#" className="text-gray-600 focus:text-purple-500 hover:text-purple-500 bottom-nav-item">
                                    <ion-icon name="heart-outline" class="text-2xl"></ion-icon>
                                    <span className="tab tab-explore block text-xs">Favorit</span>
                                </a>
                                <a href="#" className="text-gray-600 focus:text-purple-500 hover:text-purple-500 bottom-nav-item">
                                    <ion-icon name="help-outline" class="text-2xl"></ion-icon>
                                    <sanpan className="tab tab-explore block text-xs">Bantuan</sanpan>
                                </a>
                                <NavLink to="/user" className="text-gray-600 focus:text-purple-500 hover:text-purple-500 bottom-nav-item">
                                    <ion-icon name="person-outline" class="text-2xl"></ion-icon>
                                    <span className="tab tab-whishlist block text-xs">Saya</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default BottomBar;