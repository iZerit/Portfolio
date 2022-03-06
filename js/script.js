$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
    // toggle menu/ navbar 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });
});

$(document).ready(function () {
    let $links = $('.menu a');
    console.log($links);


    $links.click(function(e){
        e.preventDefault();

        let $cl = $(this).attr('href');
        let $target = $($cl).offset().top;

        console.log($cl)
        console.log($target);

        $('html,body').animate({
            scrollTop: $target,
        },900)




    })
});


