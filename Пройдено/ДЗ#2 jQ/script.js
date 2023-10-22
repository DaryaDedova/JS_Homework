$(document).ready(function () {

    $('.small a').mousemove(function(e){
        // объект для блокировки стандартного поведения ссылки
        e.preventDefault(); 
        // блокировка стандартного поведения
        if($('.big img').attr('src') != $(this).attr('href')){

            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(500).css({
                width: '100%',
                height: '100%',
            })
        }
    })


    $('.button').click(function(){
        $('.gallery').slideToggle();

        if($('.button').text() == '+'){
            $('.button').text('-')
        }else{
            $('.button').text('+')
        }
    });


    $('.buttonModal').click(function(e){
        e.preventDefault();
        $('.modal').show();
    });
    
    $('.imageCan').click(function(){
        $('.modal').hide();
    })



    
    $(function(){
        $('.buttE').click(function(e){
            e.preventDefault();
            if($('.cardNumber').val() != '' && $('.cardName').val() != '' && $('.dayCard').val() != '' && $('.yearCard').val() != '' && $('.pinCard').val() != ''){
                $('.modal').hide();
            } else{
                if($('.cardNumber').val() != ''){
                    $('.cardNumber').attr('disabled', 'disabled');
                }
                else {
                    alert('Поле Card Number не заполнено')
                }
                if($('.cardName').val() != ''){
                    $('.cardName').attr('disabled', 'disabled');
                }
                else {
                    alert('Поле Name On Card не заполнено')
                }
                if($('.dayCard').val() != ''){
                    $('.dayCard').attr('disabled', 'disabled');
                }
                else {
                    alert('Поле Date не заполнено')
                }
                if($('.yearCard').val() != ''){
                    $('.yearCard').attr('disabled', 'disabled');
                }
                else {
                    alert('Поле год не заполнено')
                }
                if($('.pinCard').val() != ''){
                    $('.pinCard').attr('disabled', 'disabled');
                }
                else {
                    alert('Поле CVV не заполнено')
                }
            }
            
        })
    })




    $('.cardNumber').mask("9999 9999 9999 9999", {autoclear: false});
    $('.dayCard').mask('99');
    $('.yearCard').mask('9999');


    // $('.small a img').click(function(){
    //     $(this).fadeTo(600, 0.6).css(
    //         {
    //             border: '1px dotter red'
    //         }
    //     )
    // });

    // $(document).mouseup(function(){
    //     $('.small a img').fadeTo(0, 1).css(
    //         {
    //             border: 'none',
    //         }
    //     )
    // })


})