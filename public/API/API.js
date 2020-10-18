
$("#showAllCarsCode").hide();
$("#showAllCarsInfo").hide();
$("#insertCarCode").hide();
$("#insertCarInfo").hide();
$("#changeCarCode").hide();
$("#changeCarInfo").hide();
$("#findIdCode").hide();
$("#findIdInfo").hide();
$("#deleteCarCode").hide();
$("#deleteCarInfo").hide();

function postAlert() {
    alert($("#car").val() + " er blevet tilføjet")
}

$("#postCar").click(()=> {
    $.post('/cars',
        {
            "id": 2,
            "car" : $("#car").val()

        })
}).mouseover (()=> {
    $("#codeOmSide").hide();
    $("#infoOmSide").hide();
    $("#insertCarCode").show();
    $("#insertCarInfo").show();
}).mouseout (()=> {
    $("#insertCarCode").hide();
    $("#insertCarInfo").hide();
    $("#infoOmSide").show();
    $("#codeOmSide").show();
});

function deleteCar() {
    if (confirm("Dette vil slette bil med ID: " + $("#carById").val())) {
        $.ajax({
            url: '/cars/' + $("#carById").val(),
            type: 'DELETE'
        });}
}

function changeCar() {
    if (confirm("Dette vil ændre bil med ID: " + $("#carById").val() + "\n" + "til: " + $("#car").val())) {
    $.ajax({
        url: '/cars/' + $("#carById").val(),
        data: {"car" : $("#car").val()},
        type: 'PATCH'
    });}
}

$("#carId").click(() => {
    window.location.href = '/cars/' + $("#carById").val()
}).mouseover (()=> {
    $("#codeOmSide").hide();
    $("#infoOmSide").hide();
    $("#findIdCode").show();
    $("#findIdInfo").show();
}).mouseout (()=> {
    $("#findIdCode").hide();
    $("#findIdInfo").hide();
    $("#infoOmSide").show();
    $("#codeOmSide").show();
});

$("#showAllCars").mouseover (()=> {
    $("#codeOmSide").hide();
    $("#infoOmSide").hide();
    $("#showAllCarsCode").show();
    $("#showAllCarsInfo").show();
}).mouseout (()=> {
    $("#showAllCarsCode").hide();
    $("#showAllCarsInfo").hide();
    $("#infoOmSide").show();
    $("#codeOmSide").show();
});


$("#changeCar").mouseover (()=> {
    $("#codeOmSide").hide();
    $("#infoOmSide").hide();
    $("#changeCarCode").show();
    $("#changeCarInfo").show();
}).mouseout (()=> {
    $("#changeCarCode").hide();
    $("#changeCarInfo").hide();
    $("#infoOmSide").show();
    $("#codeOmSide").show();
});

$("#deleteCar").mouseover (()=> {
    $("#codeOmSide").hide();
    $("#infoOmSide").hide();
    $("#deleteCarCode").show();
    $("#deleteCarInfo").show();
}).mouseout (()=> {
    $("#deleteCarCode").hide();
    $("#deleteCarInfo").hide();
    $("#infoOmSide").show();
    $("#codeOmSide").show();
});

