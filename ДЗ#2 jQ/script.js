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