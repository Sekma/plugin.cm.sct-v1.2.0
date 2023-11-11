
 (function($){
    $.fn.changeImage=function(){
    //tableau des images
 var bgTab=["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg"];
var num=0;
$("#img-left").attr("src",bgTab[num]);



 setInterval(function(){
  if(num<bgTab.length-1){
    num++;
    $(".frame:nth-child(2)").css("display","block").addClass("animate0");
    $("#img-right").attr("src",bgTab[num]);
    $(".frame:nth-child(1)").addClass("animate");
    $("#img-left").attr("src",bgTab[num-1]);
  }
  else if(num==bgTab.length-1){
    num=num-(bgTab.length-1);
    $(".frame:nth-child(2)").css("display","block").addClass("animate0");
    $("#img-right").attr("src",bgTab[num]);
    $(".frame:nth-child(1)").addClass("animate");
    $("#img-left").attr("src",bgTab[bgTab.length-1]);
  }

 

setTimeout(function(){
    $(".frame:nth-child(2)").css("display","none").removeClass("animate0");
    $(".frame:nth-child(1)").removeClass("animate");
 
    $("#img-left").attr("src",bgTab[num]);


},990) 
},4000) 

    
}  
})(jQuery);  