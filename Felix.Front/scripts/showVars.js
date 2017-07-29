function showVarsTab(){
    initVeiws();
    initVarsTab()
    $("#vars-area").css('display',"inline");
    $("#to-product").on('click',showProductTab);
    $("#to-buyer").on('click',showBuyerTab);
    $("#to-countries").on('click',showCountryTab);
    $("#to-consignee").on('click',showConsigneeTab);
    $("#to-formulations").on('click',showFormulationTab);
    $("#to-packages").on('click',showPackageTab);
}

function initVarsTab(){
    $("#vars-area div").css("display","none")
}