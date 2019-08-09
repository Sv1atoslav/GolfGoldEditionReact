import React, {Fragment} from 'react';
import SliderContant from "./slidercontant/slidercontant";
import SliderImagesContainer from "./slidercontant/sliderimagescontainer";
import SeperationLine from "./slidercontant/seperationLine";

const Slider = () => {
    return (
        <div className={'slider'}>
            <SliderContant/>
            <SeperationLine/>
            <SliderImagesContainer/>
        </div>
    );
};

export default Slider;
