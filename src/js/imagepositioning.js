images = ["assets/slider/pictures/pict1.svg", "assets/slider/pictures/pict2.svg", "assets/slider/pictures/pict3.svg"];
borders = ['6px solid', '5px solid #ffffff', '5px solid #f1f1f1'];

images_classes = [];

start_top_position = '55';
start_left_position = '40';
start_index = 3;

$(document).ready(function () {
    for (i = 0; i < images.length; i++) {
        $('.slider-images').prepend($('<div>', {class: 'class' + (i + 1).toString()}));

        $('.class' + (i + 1).toString()).prepend($('<img>', {
            src: images[i],
            height: "190"
        })).css('position', 'absolute').css('border', borders[i]).
            css('z-index', 3).css('top', start_top_position+'px').
            css('left', start_left_position+'px');

        images_classes.push('.class' + (i + 1).toString());

        start_top_position = Number.parseInt(start_top_position) - Number.parseInt(10);
        start_left_position = Number.parseInt(start_left_position) + Number.parseInt(15);
    }
});

// $(document).ready(function () {
//     text = $('.content').children('.text').text().split('\n').toString();
//     text = text.replace(/\s/g, '');
//     text = text.replace(',', '');
//     text = text.split('read more');
//     text2 = [];
//     // for (t in text.te) {
//     //     if (text[t] !== ' '){
//     //         alert(text[t])
//     //     }
//     // }
//
//     alert(text);
//
// });