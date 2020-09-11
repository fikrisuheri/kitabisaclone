import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({props}) {
    return (
        <div class="shadow mb-2" onclick="windo">
            <img src={props.img} />
            <div class="p-2 flex flex-col">
                <h1 class="font-sans text-gray-800 text-sm truncate">{props.name}</h1>
                <h1 class="font-semibold text-sm text-purple-500">{props.price}</h1>
                <Link to={props.url} class="btn-purple btn-purple-sm mb-2 mt-4 text-sm">Beli</Link>
            </div>
        </div>

    );
}

export default ProductCard;