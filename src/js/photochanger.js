class ImageChanger {

    static buttons_array = ['.circleButton1', '.circleButton2', '.circleButton3'];
    static images_array = ['.class1', '.class2', '.class3'];

    static buttons_positioning(...z_indexes){
        for (const image in this.images_array) {
            const image_of_class = this.images_array[image];
            $(image_of_class).css('z-index', z_indexes[this.images_array.indexOf(image_of_class)]);
        }
    }

    static button_color_changer(button_class_to_change_color){
        $('.circle-buttons-container').children().css('background-color', '#ffffff');
        $(button_class_to_change_color).css('background-color', '#f6ce49');
    }

    static circleButton1() {
        this.active_button === 3 ? this.buttons_positioning(3,1,2) :
            this.buttons_positioning(3, 2, 1);
        this.button_color_changer(this.buttons_array[0]);
        this.active_button = 1;
    }


    static circleButton2() {
        this.buttons_positioning(2,3,1);
        this.button_color_changer(this.buttons_array[1]);
        this.active_button = 2;
    }


    static circleButton3() {
        this.active_button === 1 ? this.buttons_positioning(2,1,3) :
            this.buttons_positioning(1, 2, 3);
        this.button_color_changer(this.buttons_array[2]);
        this.active_button = 3;
    }
}
