
function mudar_Periodo() {
    var v_basico= document.getElementById('v-basico');
    var v_pro= document.getElementById('v-pro');
    var v_mestre= document.getElementById('v-mestre');
    if (v_basico.innerHTML == "19.99") {
        v_basico.innerHTML="199.99";
        v_pro.innerHTML="249.99";
        v_mestre.innerHTML="399.99";
        
        document.getElementById("btn-check").classList.add("btn-check-1");
    }
    else {
        v_basico.innerHTML="19.99";
        v_pro.innerHTML="24.99";
        v_mestre.innerHTML="39.99";
        document.getElementById("btn-check").classList.remove("btn-check-1");
    }
}
