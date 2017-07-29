/**
 * Created by krustev on 7/26/2017.
 */
function createProduct(){
    $('#show-section ul li').remove();
    $("#create-section").css("display","inline")
    success: $('#result').text();

}

function create(){
    let data={
        Name: $("#productName").val()
    }

    console.log(data);
    $.ajax({
        type: "POST",
        url: 'http://localhost:22064/api/Products',
        data: data,
        success: $('#result').text("Success")

    });
}