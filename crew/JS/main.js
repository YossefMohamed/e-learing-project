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
var x = document.getElementById("click"),
    i = document.getElementsByTagName("input");
x.onclick = function () {
    "use strict";
    if (i[3].value === "") {
        alert("pleas input your first name");
        return false;
    } else if (i[4].value === "") {
        alert("pleas input your last name");
        return false;
    } else if (i[5].value === "") {
        alert("pleas input your E-mail");
        return false;
    } else if (i[6].value === "") {
        alert("pleas input your telephone");
        return false;
    } else if (i[7].value === "") {
        alert("please upload your CV");
        return false;
    } else {
        alert("we will send a message to your E-mail after reading CV , good luck");
    }
};