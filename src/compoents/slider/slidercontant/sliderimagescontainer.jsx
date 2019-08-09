import React from 'react';
import $ from '../../../js/jquery-3.4.1.slim';

export default class SliderImagesContainer extends React.Component {

    buttons_array = ['.circleButton1', '.circleButton2', '.circleButton3'];
    images_array = ['.class1', '.class2', '.class3'];

    buttons_positioning(...z_indexes) {
        for (const image in this.images_array) {
            const image_of_class = this.images_array[image];
            $(image_of_class).css('z-index', z_indexes[this.images_array.indexOf(image_of_class)]);
        }
    }

    static button_color_changer(button_class_to_change_color) {
        $('.circle-buttons-container').children().css('background-color', '#ffffff');
        $(button_class_to_change_color).css('background-color', '#f6ce49');
    }

    circleButton1() {
        this.active_button === 3 ? this.buttons_positioning(3, 1, 2) :
            this.buttons_positioning(3, 2, 1);
        SliderImagesContainer.button_color_changer(this.buttons_array[0]);
        this.active_button = 1;
    }


    circleButton2() {
        this.buttons_positioning(2, 3, 1);
        SliderImagesContainer.button_color_changer(this.buttons_array[1]);
        this.active_button = 2;
    }


    circleButton3() {
        this.active_button === 1 ? this.buttons_positioning(2, 1, 3) :
            this.buttons_positioning(1, 2, 3);
        SliderImagesContainer.button_color_changer(this.buttons_array[2]);
        this.active_button = 3;
    }

    // ========================================================================================

    // componentDidMount() {
    //     var images = ["../../../assets/slider/pictures/pict1.svg", "../../../assets/slider/pictures/pict2.svg",
    //                         "../../../assets/slider/pictures/pict3.svg"];
    //     var borders = ['6px solid', '5px solid #ffffff', '5px solid #f1f1f1'];
    //     var start_top_position = '55';
    //     var start_left_position = '40';
    //     var i = 0;
    //
    //     $(document).ready(function () {
    //         for (i = 0; i < images.length; i++) {
    //             $('.slider-images').prepend($('<div>', {class: 'class' + (i + 1).toString()}));
    //
    //             $('.class' + (i + 1).toString()).prepend($('<img>', {
    //                 src: images[i],
    //                 height: "190"
    //             })).css('position', 'absolute').css('border', borders[i]).css('z-index', 3).css('top', start_top_position + 'px').css('left', start_left_position + 'px');
    //
    //             start_top_position = Number.parseInt(start_top_position) - Number.parseInt(10);
    //             start_left_position = Number.parseInt(start_left_position) + Number.parseInt(15);
    //         }
    //     });
    // }

    render() {
        return (
            <div className="slider-images-container">
                <div className="slider-images">
                    <div className="class3">
                        <img src={require('../../../assets/slider/pictures/pict3.svg')}
                             alt={'Not found'} height={190}/>
                    </div>
                    <div className="class2">
                        <img src={require('../../../assets/slider/pictures/pict2.svg')}
                             alt={'Not found'} height={190}/>
                    </div>
                    <div className="class1">
                        <img src={require('../../../assets/slider/pictures/pict1.svg')}
                             alt={'Not found'} height={190}/>
                    </div>
                </div>
                <div className="circle-buttons-container">
                    <button className="circleButton1" onClick={this.circleButton1()}/>
                    <button className="circleButton2" onClick={this.circleButton2()}/>
                    <button className="circleButton3" onClick={this.circleButton3()}/>
                </div>
            </div>
        )
    }
}
