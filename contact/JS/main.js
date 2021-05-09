/*global document ,alert*/
function chngeBorderColor(i) {
    "use strict";
    i.style.borderColor = "#705ECF";
}
function chngeBorderColor2(i) {
    "use strict";
    if (i.value === "") {
        i.style.borderColor = "#555";
    } else {
        i.style.borderColor = "#705ECF";
    }
}
var x = document.getElementById("click");
x.onclick = function() {
    "use strict";
    alert("our lastest news will be sent to the email you input")
}