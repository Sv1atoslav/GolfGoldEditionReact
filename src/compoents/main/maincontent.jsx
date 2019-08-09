import React from 'react';

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="block">
                <div className="heading">
                    Online Tea Time System
                </div>
                <div className="content">
                    <img src={require('../../assets/maincontant/cont1.png')} style={{height: "130px"}} alt="Not found"/>
                        <div className="text">
                            Book golf online with our new tee time system. Select a course from around the world and
                            book your
                            discounted rates now
                            <br/>
                                <a href="#">read more</a>
                                <img src={require('../../assets/maincontant/arrow.png')} alt="Not found"/>
                        </div>
                </div>
            </div>
            <div className="block">
                <div className="heading">
                    International Pairs Club Event
                </div>
                <div className="content">
                    <img src={require('../../assets/maincontant/cont2.png')} style={{height: "130px"}} alt="Not found"/>
                        <div className="text">
                            Win your club event to qualify to a regional final, then you are just 2 steps away from
                            having the
                            chance to compete in the 2011
                            <br/>
                                <a href="#">read more</a>
                                <img src={require('../../assets/maincontant/arrow.png')} alt="Not found"/>
                        </div>
                </div>
            </div>
            <div className="block">
                <div className="heading">
                    Daily Express Jamaica Doubles
                </div>
                <div className="content">
                    <img src={require('../../assets/maincontant/cont3.png')} style={{height: "130px"}} alt="Not found"/>
                        <div className="text">
                            Win your eay through to a week in the Carribean at the fabulous Breezes Runaway Bay Resort &
                            Golf
                            Club
                            <br/>
                                <a href="#">read more</a>
                                <img src={require('../../assets/maincontant/arrow.png')} alt="Not found"/>
                        </div>
                </div>
            </div>
            <div className="block">
                <div className="heading">
                    IP World Final 2011 VIP Event
                </div>
                <div className="content">
                    <img src={require('../../assets/maincontant/cont4.svg')} style={{height: "130px"}} alt="Not found"/>
                        <div className="text">
                            We are delighted to announce a new feature to our World Final event. We have organised a VIP
                            event
                            for guests and VIP's
                            <br/>
                                <a href="#">read more</a>
                                <img src={require('../../assets/maincontant/arrow.png')} alt="Image not found"/>
                        </div>
                </div>
            </div>
        </div>
)
};

export default MainContent;