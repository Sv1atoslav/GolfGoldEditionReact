import React from 'react';

const Aside = ()  => {
    return (
        <aside>
            <a href="#"> <img src={require('../../assets/aside/twitter.svg')} alt="Not found"/></a>
            <a href="#"><img src={require("../../assets/aside/facebook.svg")} alt="Not found"/></a>
            <a href="#"><img src={require("../../assets/aside/linked.svg")} alt="Not found"/></a>
            <a href="#"> <img src={require("../../assets/aside/youtube.svg")} alt="Not found"/></a>
        </aside>
);
};

export default Aside;
