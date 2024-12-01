// Try catch is used to handle errors (like exception handing in python.)
const inp = document.getElementById("input");
const audio = new Audio("track.mp3");
inp.disabled = true; // disabled input field so that the user cant directly interect with the input field.
document.getElementById("7").onclick = () => {
    audio.play();
    if(inp.value.includes("Invalid input!")){
        inp.value="7";
    }
    else{
        inp.value += "7";
    }
}
document.getElementById("1").onclick = () => {
    audio.play();
    if(inp.value.includes("Invalid input!")){
        inp.value="1"
    }
    else{
        inp.value += "1";
    }
}
document.getElementById("2").onclick = () => {
    audio.play();
    if(inp.value.includes("Invalid input!")){
        inp.value="2";
    }
    else{
        inp.value += "2";
    }
}
document.getElementById("3").onclick = () => {
    audio.play();
    if(inp.value.includes("Invalid input!")){
        inp.value="3"
    }
    else{
        inp.value += "3";
    }
}
document.getElementById("4").onclick = () => {
    audio.play();
    if(inp.value.includes("Invalid input!")){
        inp.value="4";
    }
    else{
        inp.value += "4";
    }
}
document.getElementById("5").onclick = () => {
    audio.play();
    if(inp.value.includes("Invalid input!")){
        inp.value="5";
    }
    else{
        inp.value += "5";
    }
}
document.getElementById("6").onclick = () => {
    audio.play();
    if(inp.value.includes("Invalid input!")){
        inp.value="6";
    }
    else{
        inp.value += "6";
    }
}
document.getElementById("8").onclick = () => {
    audio.play();
    if(inp.value.includes("Invalid input!")){
        inp.value="8"
    }
    else{
        inp.value += "8";
    }
}
document.getElementById("9").onclick = () => {
    audio.play();
    if(inp.value.includes("Invalid input!")){
        inp.value="9";
    }
    else{
        inp.value += "9";
    }
}
document.getElementById("0").onclick = () => {
    audio.play();
    if(inp.value.includes("Invalid input!")){
        inp.value="0";
    }
    else{
        inp.value += "0";
    }
}
document.getElementById("00").onclick = () => {
    audio.play();
    if(inp.value.includes("Invalid input!")){
        inp.value="00"
    }
    else{
        inp.value += "00";
    }
}
document.getElementById(".").onclick = () => {
    audio.play();
    if(inp.value.includes("Invalid input!")){
        inp.value=".";
    }
    else{
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
    if(inp.value.includes("Invalid input!")){
        inp.value="+"
    }
    else{
        inp.value +="+" ;
    }
}
document.getElementById("-").onclick = () => {
    audio.play();
    if(inp.value.includes("Invalid input!")){
        audio.play();
        inp.value="-"
    }
    else{
    inp.value +="-" ;
    }
}
document.getElementById("x").onclick = () => {
    audio.play();
    if(inp.value.includes("Invalid input!")){
        audio.play();
        inp.value="*";
    }
    else{
    inp.value +="*" ;
    }
}
document.getElementById("/").onclick = () => {
    audio.play();
    if(inp.value.includes("Invalid input!")){
        audio.play();
        inp.value="/"
    }
    else{
    inp.value +="/";
    }
}
document.getElementById("^").onclick = () => {
    audio.play();
    if(inp.value.includes("Invalid input!")){
        audio.play();
        inp.value="^"
    }
    else{
    inp.value +="^";
    }
}
document.getElementById("=").onclick = () => {
    audio.play();
    try{
        if(inp.value.includes("+-")||inp.value.includes("-+")||inp.value.includes("//")||inp.value.includes("**")||inp.value.includes("/+")||inp.value.includes("/-")||inp.value.includes("^+")||inp.value.includes("^-")||inp.value.includes("*+")||inp.value.includes("*-")){
            inp.value="Invalid input!";
        }
        else if(inp.value.includes("^")){
            inp.value =`${eval(inp.value.replace("^","**"))}`
        }
        else{
            inp.value =`${eval(inp.value)}`;
        }
    }
    catch(errors){
        inp.value="Invalid input!";
    }
}
