import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (category) => {
        setFavorites([...favorites, category]);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
