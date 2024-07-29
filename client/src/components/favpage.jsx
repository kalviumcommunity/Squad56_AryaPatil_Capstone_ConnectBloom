import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';

function Favpage() {
    const { favorites } = useContext(FavoritesContext);

    return (
        <div>
            <h1>Favorites</h1>
            <ul>
                {favorites.map((item, index) => (
                    <li key={index}>
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                        <p>{item.benefits}</p>
                        <p>{item.category}</p>
                        <p>{item.location}</p>
                        <p>{item.price}</p>
                        <p>{item.contact}</p>
                        <p>{item.address}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Favpage;
