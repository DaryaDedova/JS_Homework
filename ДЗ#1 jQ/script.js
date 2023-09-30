$(document).ready(function(){


    $(function leftR(){
        $('img')
        .animate({
            marginLeft: "300px"
        }, 1000)
        .animate({
            marginLeft: "-300px"
        }, 1000, leftR)
    });
        $('h2').mouseover(function newCL(){
            $('h2').animate({
                'font-size': '30pt',
             }, 1500).animate({
                'font-size': '16pt',
            }, 1500, newCL)
        });


})