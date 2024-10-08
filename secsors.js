let userscore=0;
let comscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(" #msg");
const userscorepara=document.querySelector("#userscore");
const comscorepara=document.querySelector("#comscore");
const gencom=()=>{
    const option=["rock","paper","scissor"];
    const randidx= Math.floor(Math.random()*3);
    return option[randidx];
}
const drawgame=()=>{
    msg.innerText="game is draw!";
    msg.style.backgroundColor = "darkblue";
}
const showwinner=(userwin,userchoice,comchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${comchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        comscore++;
        comscorepara.innerText=comscore;
        msg.innerText = `You lost. ${comchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame=(userchoice) =>{
    const comchoice=gencom();
    if(userchoice===comchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice=="rock"){
            userwin=comchoice==="paper"?false:true;
        }else if(userchoice=="paper"){
            userwin=comchoice==="scissor"?false:true;
        }else{
            userwin=comchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,comchoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
     playgame(userchoice);
    })
    
});