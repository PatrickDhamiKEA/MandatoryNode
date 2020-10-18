
$("#hashtagSelectorImg").hide();
$("#dotSelectorImg").hide();
$("#cssLinkImg").hide();

$("#hashtagSelector").mouseover (()=> {
    $("#hashtagSelectorImg").show();
}).mouseout (()=> {
    $("#hashtagSelectorImg").hide();
});

$("#dotSelector").mouseover (()=> {
    $("#dotSelectorImg").show();
}).mouseout (()=> {
    $("#dotSelectorImg").hide();
});

$("#cssLink").mouseover (()=> {
    $("#cssLinkImg").show();
}).mouseout (()=> {
    $("#cssLinkImg").hide();
});