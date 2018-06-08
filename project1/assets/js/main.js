$("ul").on("click","li",function(){

    $(this).toggleClass("cizilme"); // uzerine tiklaninca cizgi ciziyor. css cizilme classi kullaniyor.

});

$("ul").on("click", "span" ,function(event){
   $(this).parent().fadeOut(500,function(){
        $(this).remove();
   });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var yeniEKle = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-window-close' aria-hidden='true'></i></span>"+" " + yeniEKle + " </li>")
    }
    
});
