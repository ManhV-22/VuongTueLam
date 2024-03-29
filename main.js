function yes(){
    // var success = doccument.getElementById("success");
    var btnYes = document.getElementById("default")
    var no = document.getElementById("img_failse");
    var change = document.getElementById("img_true");
    no.style.opacity = 0;
    change.style.opacity = 1;
    btnYes.style.display = "none";

}

opaValue = 0;

function no() {
    var no = document.getElementById("img_failse");
    var change = document.getElementById("img_true");
    opaValue += 0.1;
    no.style.opacity = opaValue;

}