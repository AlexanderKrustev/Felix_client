function show(){

    let request={
        url: 'http://localhost:22064/api/Products',
        success: display
    }

    $.ajax(request)
}

function display(repos){
    $('#show-section ul li').remove();
    $("#create-section").css("display","none")
    console.log(repos)
    for(let r of repos){
        let li=$('<li>').text(r.Name+"------>");
        let btn=$("<button>").text("Edit");
        btn.on("click",edit);
        li.append(btn)
        $('#show-section ul').append(li)
    }
}

function edit(){
    //TODO: EDIT
}