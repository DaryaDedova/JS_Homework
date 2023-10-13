$(document).ready(function(){
    $('.firstHomeW').click(function(){
        $('.first').show()
    })

    $('.closeF').click(function(){
        $('.first').hide()
    })


    $('.secondHomeW').click(function(){
        $('.second').show()
    })

    $('.closeS').click(function(){
        $('.second').hide()
    })



    let flag = true;

    $('.burgerMenu').click(function(){
            if(flag){
                $('.burg').css(
                    {                
                        left: '0px',
                        transition: '1s ease'
                    }
                )
            }else{
                $('.burg').css(
                            {
                                left: '-300px',
                                transition: '1s ease'                
                            }
                )
            }
            flag = !flag;
        });

        $('.firHomeW').click(function(){
            $('.first').show()
        })
    
        $('.secHomeW').click(function(){
            $('.second').show()
        })

        









})