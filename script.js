console.log('Welcome to tic tac toe');
let ting= new Audio("ting.mp3");
let gameOver= new Audio("gameover.mp3");

let turn="X";

//Function to change turn
const changeTurn=()=>{
    return turn === "X" ? "O" : "X";
}

//Function to check for win
const checkWin=()=>{
    let texts=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],
        [0,4,8,0,15,45],
        [2,4,6,0,15,135],
    ];
    wins.forEach((e)=>{
        if((texts[e[0]].innerText===texts[e[1]].innerText) && (texts[e[2]].innerText===texts[e[1]].innerText) && texts[e[0]].innerText !==''){
            document.querySelector('.winner').innerText = texts[e[0]].innerText + " Won 🥳🥳";
            document.querySelector('.turn').innerText='';
            document.querySelector('img').style.width="15vw";
            document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width="30vw";
        }
    })
}

//Game Logic
const boxes=document.querySelectorAll('.sec');
Array.from(boxes).forEach((box)=>{
    let text=box.querySelector('.boxtext')
    box.addEventListener('click',()=>{
        if(text.innerHTML===''){
            text.innerHTML=turn;
            ting.play();
            turn=changeTurn();
            document.querySelector('.turn').innerText=turn;
            checkWin();
        }
    })
})

//For Reset 
const reset=document.querySelector('.reset');
reset.addEventListener('click',()=>{
    Array.from(boxes).forEach((box)=>{
        box.querySelector('.boxtext').innerText='';
    })
    turn='X';
    document.querySelector('img').style.width="0px";
    document.querySelector('.winner').innerText ="Turn For "
    document.querySelector('.turn').innerText=turn;
    document.querySelector('.line').style.width="0vw";
})