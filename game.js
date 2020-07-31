const $submitButton=document.getElementById("submit");
const $message=document.getElementById("message");
const $lives=document.getElementById("lives");
var ans=Math.round(Math.random()*100);
var lives=10;
var message;
$submitButton.onclick=()=>{
    let userinput=document.getElementById("number").value; 
    lives--;
    if(userinput==ans)
    {
        location.href="./win.html";
    }
    else if(lives==0)
    {
        location.href="./lose.html";
    }
    else if(userinput>ans)
    {
        message='oops your guess is too high you have $(lives) lives left ';

    }
    else if(userinput<ans)
    {
        message='oops your guess is too low you have $(lives) lives left ';

    } 
    $message.style.display="inherit";
    $message.innerHTML=message;
    $lives.innerHTML=lives;




}