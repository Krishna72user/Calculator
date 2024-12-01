const inp = document.getElementById("input");
const audio = new Audio("track.mp3");
inp.disabled = true; // disabled input field so that the user cant directly interect with the input field.
document.getElementById("7").onclick = () => {
    if(inp.value.includes("Invalid input!")){
        audio.play();
        inp.value="7";
    }
    else{
        audio.play();
        inp.value += "7";
    }
}
document.getElementById("1").onclick = () => {
    if(inp.value.includes("Invalid input!")){
        audio.play();
        inp.value="1"
    }
    else{
        audio.play();
        inp.value += "1";
    }
}
document.getElementById("2").onclick = () => {
    if(inp.value.includes("Invalid input!")){
        audio.play();
        inp.value="2";
    }
    else{
        audio.play();
        inp.value += "2";
    }
}
document.getElementById("3").onclick = () => {
    if(inp.value.includes("Invalid input!")){
        audio.play();
        inp.value="3"
    }
    else{
        audio.play();
        inp.value += "3";
    }
}
document.getElementById("4").onclick = () => {
    if(inp.value.includes("Invalid input!")){
        audio.play();
        inp.value="4";
    }
    else{
        audio.play();
        inp.value += "4";
    }
}
document.getElementById("5").onclick = () => {
    if(inp.value.includes("Invalid input!")){
        audio.play();
        inp.value="5";
    }
    else{
        audio.play();
        inp.value += "5";
    }
}
document.getElementById("6").onclick = () => {
    if(inp.value.includes("Invalid input!")){
        audio.play();
        inp.value="6";
    }
    else{
        audio.play();
        inp.value += "6";
    }
}
document.getElementById("8").onclick = () => {
    if(inp.value.includes("Invalid input!")){
        audio.play();
        inp.value="8"
    }
    else{
        audio.play();
        inp.value += "8";
    }
}
document.getElementById("9").onclick = () => {
    if(inp.value.includes("Invalid input!")){
        audio.play();
        inp.value="9";
    }
    else{
        audio.play();
        inp.value += "9";
    }
}
document.getElementById("0").onclick = () => {
    if(inp.value.includes("Invalid input!")){
        audio.play();
        inp.value="0";
    }
    else{
        audio.play();
        inp.value += "0";
    }
}
document.getElementById("00").onclick = () => {
    if(inp.value.includes("Invalid input!")){
        audio.play();
        inp.value="00"
    }
    else{
        audio.play();
        inp.value += "00";
    }
}
document.getElementById(".").onclick = () => {
    if(inp.value.includes("Invalid input!")){
        audio.play();
        inp.value=".";
    }
    else{
        audio.play();
        inp.value += ".";
    }
}
document.getElementById("ac").onclick = () => {
    audio.play();
    inp.value = "";
}
document.getElementById("del").onclick = () => {
    audio.play();
    inp.value = inp.value.slice(0,length-1);
}
document.getElementById("+").onclick = () => {
    audio.play();
    inp.value +="+" ;
}
document.getElementById("-").onclick = () => {
    audio.play();
    inp.value +="-" ;
}
document.getElementById("x").onclick = () => {
    audio.play();
    inp.value +="*" ;
}
document.getElementById("/").onclick = () => {
    audio.play();
    inp.value +="/";
}
document.getElementById("^").onclick = () => {
    audio.play();
    inp.value +="^";
}
document.getElementById("=").onclick = () => {
    audio.play();
    if(inp.value.includes("++")||inp.value.includes("--")||inp.value.includes("^^")||inp.value.includes("//")||inp.value.includes("..")||inp.value.includes("**")){
        inp.value="Invalid input!";
    }
    else if(inp.value.includes("^")){
        inp.value =`${eval(inp.value.replace("^","**"))}`
    }
    else{
        inp.value =`${eval(inp.value)}`;
    }
}
