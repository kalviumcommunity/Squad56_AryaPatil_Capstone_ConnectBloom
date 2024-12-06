import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext.jsx';
import './Favpage.css';
import Navbar from './Nav.jsx';

function Favpage() {
    const { favorites } = useContext(FavoritesContext);

    return (
        <>
        <Navbar/>
        <div className='headingfav'>
            <h1 >Favorites</h1>
            <ul className='ulgrid'>
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
        </>
    );
}

export default Favpage;
