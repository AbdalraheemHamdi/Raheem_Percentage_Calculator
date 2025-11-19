let myForm = document.forms[0];
let myNumber = document.querySelector("[name='num']");
let myTotal = document.querySelector("[name='tot']");
let myButton = document.getElementById("calc");
let myResult = document.getElementById("rst");

myButton.onclick = function () {
    
    let num = myNumber.value;
    let tot = myTotal.value;

    if (num=="") {
        num=0;
    }
    if (tot=="") {
        tot=0;
    }

    let result = ((num / tot) * 100).toFixed(2);

    myResult.style.cssText="position:absolute;bottom:50px;color:#fff;background-color:#10cab7;padding:10px 20px;border-radius:100px";
    if (result<50) {
        myResult.style.cssText="position:absolute;bottom:50px;color:#fff;background-color:#ff4141;padding:10px 20px;border-radius:100px";
    }
    myResult.innerText = `Percentage : ${result}%`;
    
    let myFormDiv = document.getElementById("frm");
    myFormDiv.append(myResult);
    console.log("Submitted");
}