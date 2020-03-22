$('button').on("click", function(){
    $('div').fadeOut(1000, function(){
        console.log("Fade Completed");
        $(this).remove();
    });
});


$('button').on("click", function(){
    $('div').fadeIn(1000);
});


$('button').on("click", function(){
    $('div').fadeToggle(1000);
});

//with display: none;
$('button').on("click", function(){
    $('div').slideDown();
});

//without display: none;
$('button').on("click", function(){
    $('div').slideUp();
});

$('button').on("click", function(){
    $('div').slideToggle(1000, function(){
        console.log("Slide is done!");
    });
});
