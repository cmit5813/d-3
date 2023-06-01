$(function(){

    $(".sub").hide(); //서브 가리기

    $(".main li").hover(function(){     //메인호버시 서브나옴.
        $(".sub").stop().show();
    },function(){
        $(".sub").stop().hide();
    })//main li=hover

})//jq