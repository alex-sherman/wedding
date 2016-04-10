$(document).ready(function(){  

    $(".widget").click(function(){ 
        window.location=$(this).children("a").attr("href");
        return false; 
    }) 
});