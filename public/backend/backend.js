$("#packageJson").hide();
$("#directImg").hide();
$("#listenImg").hide();


$("#depend").mouseover (()=> {
    $("#packageJson").show();
}).mouseout (()=> {
    $("#packageJson").hide();
});

$("#direct").mouseover (()=> {
    $("#directImg").show();
}).mouseout (()=> {
    $("#directImg").hide();
});

$("#listen").mouseover (()=> {
    $("#listenImg").show();
}).mouseout (()=> {
    $("#listenImg").hide();
});

