$(function(){

    $(".sub").hide(); //서브 가리기

    $(".main li, .sub").hover(function(){     //메인호버시 서브나옴.
        $(".sub").stop().show();
    },function(){
        $(".sub").stop().hide();
    })//main li=hover

    $(".sub_list >li").hover(function(){
        var n = $(this).index();
        console.log("n:",n)
        $(".main li a").removeClass("on")
        $(".main li").eq(n).find("a").addClass("on")
    },function(){
        $(".main li a").removeClas("on")
    })//

//이미지 슬라이드

    // // $(".fade li").eq(0).siblings().hide()
    // $(".fade li").eq(0).show()
    // $(".fade li").eq(1).hide()
    // $(".fade li").eq(2).hide()

    // var n=0;
    // setInterval(function(){
    //     $(".fade li").eq(n).fadeOut();
    //     if(n==2){
    //         n=0
    //     }else{
    //         n++
    //     }
    //     console.log("n:",n)
    // },2500)

})//jq