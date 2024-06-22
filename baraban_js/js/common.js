$(document).ready(function() {

    let prize_visible_el = $('.result_p');
    let prize_img = $('#prize_img');
    let drum = $('#drum');

    var resultArr = [
        {
            title: '1 месяц Литрес',
            degs: 0,
            prize_img: 'one_month_litres.png',
        },
        {
            title: 'Баллы для игры',
            degs: 52,
            prize_img: 'points_for_game.png',
        },
        {
            title: '1 попытка',
            degs: 105,
            prize_img: 'one_more_try.png',
        },
        {
            title: '500 баллов Пятерочка',
            degs: 158,
            prize_img: '500_ballov_5-ka.png',
        },
        {
            title: 'Стикер-пак для телеграмм Clear',
            degs: 206,
            prize_img: 'sticker_pack_for_tg.png',
        },
        {
            title: '1 месяц Яндекс Плюс',
            degs: 260,
            prize_img: '1_month_ya_plus.png',
        },
        {
            title: '0.5 Попытки',
            degs: 312,
            prize_img: 'half_of_try.png',
        },
    ];
    var moveCountTotal = 0;
    var rotate = 0;

    let permanently_rotate = 0;

    if (!permanently_rotate){
        drum.css('transition', '7s ease-in-out');
        drum.css('transition-property', 'transform');
    }

    function hideResults(){
        prize_visible_el.css('display', 'none');
    }

    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }
    function getRandomIntInclusive(x, y) {
        return Math.floor(Math.random() * (y - x + 1)) + x;
    }

    function drumResult(text) {
        function drumResultInner(tt) {
            $(".drum-result").html(tt.title);
            $(".drum-btn").removeAttr("disabled");
            prize_visible_el.css('display', 'block');

            let img_src = `./img/prize_imgs/${tt.prize_img}`;
            prize_img.attr("src", img_src);
            //console.log(tt.prize_img);
        }

        if (permanently_rotate){
            drumResultInner(text);
        }else{
            setTimeout(drumResultInner, 7200, text); //7200
        }
    }

    $('.drum-btn').click(function() {
        hideResults();
        $(".drum-btn").attr("disabled", 'disabled');

        //var num = randomInteger(1, 8);
        var num = getRandomIntInclusive(1, resultArr.length);

        var resultInner = resultArr[num - 1];
        drumResult(resultInner);

        let tmp;
        if (rotate !== 0){
            tmp = (360 - rotate);
            rotate = resultInner.degs;
            moveCountTotal += tmp + 360 * 5 + rotate;
        }else{
            rotate = resultInner.degs;
            moveCountTotal += 360 * 5 + rotate;
        }

        moveStyle = 'rotate(' + moveCountTotal + 'deg)';
        $('#drum').css({
            'transform': moveStyle
        });

    });
});
