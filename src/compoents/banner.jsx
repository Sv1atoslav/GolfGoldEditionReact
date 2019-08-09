import React from 'react';

const Banner = () => {
    return (
        <div className="banner">
            <figure>
                <img src={require('../assets/banner.svg')} height="128" width="270" alt={'Image not found'}/>
            </figure>
        </div>
    );
};

export default Banner;
