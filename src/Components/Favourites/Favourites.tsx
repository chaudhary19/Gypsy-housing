import React from 'react';
import FavouriteList from './FavouriteList';

const Favourites:React.FunctionComponent =()=>{
    const style={
        marginLeft:'18rem'
    }
    return (
        <div  style={style}>
            <p className ='text-6xl font-bold mt-3'>Favourites</p>
            <FavouriteList/>
        </div>
    );
}

export default Favourites;