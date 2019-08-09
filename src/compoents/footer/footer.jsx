import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-contant">
                <img src={require('../../assets/footer/footerbg.png')} alt="Image not found" style={{height: "100px"}}/>
                    <div className="menu-container">
                        <p className="headers">Membership</p>
                        <ul>
                            <li>
                                <img src={require('../../assets/footer/footerline.png')} style={{width: '200px'}} alt="Image  ot found"/>
                            </li>
                            <li>
                                <a href="#">Individual</a>
                            </li>
                            <li>
                                <a href="#">Society</a>
                            </li>
                            <li>
                                <a href="#">Golf Clubs</a>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-container">
                        <p className="headers">Membership</p>
                        <ul>
                            <li>
                                <img src={require('../../assets/footer/footerline.png')} style={{width: '200px'}} alt="Image  ot found"/>
                            </li>
                            <li>
                                <a href="#">Individual</a>
                            </li>
                            <li>
                                <a href="#">Society</a>
                            </li>
                            <li>
                                <a href="#">Golf Clubs</a>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-container">
                        <p className="headers">Membership</p>
                        <ul>
                            <li>
                                <img src={require('../../assets/footer/footerline.png')} style={{width: '200px'}} alt="Image  ot found"/>
                            </li>
                            <li>
                                <a href="#">Individual</a>
                            </li>
                            <li>
                                <a href="#">Society</a>
                            </li>
                            <li>
                                <a href="#">Golf Clubs</a>
                            </li>
                        </ul>
                    </div>
            </div>
        </footer>
    )
};

export default Footer;