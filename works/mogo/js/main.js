$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nav1').addClass('sticky');
        }else{
            $('.nav1').removeClass('sticky');
        }
    })
});