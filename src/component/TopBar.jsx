import React from 'react';
import { useHistory } from 'react-router-dom';

function TopBar({ children,title }) {
    let history = useHistory();
    console.log(history)
    return (
        <div className="flex">
            <div className="w-full md:w-1/3  mx-auto">
                <nav className="bg-white w-full md:w-1/3 mx-auto lock fixed inset-x-0 top-0 z-10">
                    <div className="flex flex-row p-3">
                        <div className="inline-block align-middle">
                            <a className="text-gray-700 hover:text-gray-800 cursor-pointer" onClick={() => history.goBack()} >
                                <ion-icon name="arrow-back-outline" class="text-3xl"></ion-icon>
                            </a>
                        </div>
                        <div className="inline-block align-bottom  ml-4">
                            <span className="text-lg font-medium">{title}</span>
                        </div>
                    </div>
                </nav>
                <div class="flex flex-col flex-wrap mb-20 mt-16">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default TopBar;