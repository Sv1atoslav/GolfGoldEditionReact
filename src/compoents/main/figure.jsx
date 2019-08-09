import React from 'react';

const Figure = () => {
    return (
        <figure>
            <img src={require('../../assets/markdown.png')} alt="Not found"/>
            <div className="text">
                2012 Tournament Programme
            </div>
        </figure>
    )
};

export default Figure;