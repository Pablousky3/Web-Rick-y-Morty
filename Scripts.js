//   selector de planetas

$(".pin").mouseenter(function(){
    // console.log($(this).data("country"));
    let country = $(this).data("country");
    $(".Pin"+ country +".fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "infinite")
    $(".Foto"+ country +" img").css("opacity", "100%")
    $(".Texto"+ country).css("opacity", "100%")
    $("caja-foto"+ country).css("opacity", "100")
})

$(".pin").mouseleave(function(){
    // console.log($(this).data("country"));
    let country = $(this).data("country");
    $(".Pin"+ country +".fa-solid.fa-location-pin.fa-beat-fade").css("animation-iteration-count", "0")
    $(".Foto"+ country +" img").css("opacity", "0%")
    $(".Texto"+ country).css("opacity", "0%")
})