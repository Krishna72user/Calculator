const inp = document.getElementById("input");
inp.disabled = true; // disabled input field so that the user cant directly interect with the input field.
document.getElementById("7").onclick = () => {
    inp.value += "7";
}
document.getElementById("1").onclick = () => {
    inp.value += "1";
}
document.getElementById("2").onclick = () => {
    inp.value += "2";
}
document.getElementById("3").onclick = () => {
    inp.value += "3";
}
document.getElementById("4").onclick = () => {
    inp.value += "4";
}
document.getElementById("5").onclick = () => {
    inp.value += "5";
}
document.getElementById("6").onclick = () => {
    inp.value += "6";
}
document.getElementById("8").onclick = () => {
    inp.value += "8";
}
document.getElementById("9").onclick = () => {
    inp.value += "9";
}
document.getElementById("0").onclick = () => {
    inp.value += "0";
}
document.getElementById("00").onclick = () => {
    inp.value += "00";
}
document.getElementById(".").onclick = () => {
    inp.value += ".";
}
document.getElementById("ac").onclick = () => {
    inp.value = " ";
}
document.getElementById("del").onclick = () => {
    inp.value = inp.value.slice(0,length-1);
}
document.getElementById("+").onclick = () => {
    inp.value +="+" ;
}
document.getElementById("-").onclick = () => {
    inp.value +="-" ;
}
document.getElementById("x").onclick = () => {
    inp.value +="*" ;
}
document.getElementById("/").onclick = () => {
    inp.value +="/";
}
document.getElementById("^").onclick = () => {
    inp.value +="**";
}
document.getElementById("=").onclick = () => {
    inp.value =`${eval(inp.value)}`;
}
