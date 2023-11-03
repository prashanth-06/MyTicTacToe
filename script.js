let music=new Audio('music.mp3');
let audioTurn=new Audio('ting.mp3');
let gameOver=new Audio('gameover.mp3');
let turn='X'
let isgameover=false;

const changeTurn=()=>{
    return turn==='X'?'0':'X'
}

const checkWin=()=>{
    let boxTexts=document.getElementsByClassName('boxText');
    let wins=[
              [0, 1, 2, 5, 5, 0],
              [3,4,5,5,15,0],
              [6,7,8,5,25,0],
              [0,3,6,-5,15,90],
              [1,4,7,5,15,90],
              [2,5,8,15,15,90],
              [0,4,8,5,15,45],
              [2,4,6,5,15,135]
            ]
    wins.forEach(e=>{
        if ((boxTexts[e[0]].innerText===boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText===boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText!=='')){
            document.querySelector('.info').innerText=boxTexts[e[0]].innerText + ' Won'
            document.getElementById('res').style.backgroundColor='green';
            document.getElementById('res').style.color='white';
            isgameover=true;
            document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width='200px';
            document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width="20vw";
          
    
        }
        

    })

}


let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach(element=>{
    let boxText=element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if(boxText.innerText===''){
            boxText.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName('info')[0].innerText='Turn for ' + turn;
                
    

            }
            
        }
    })
})

button.addEventListener('click',()=>{
    let bText=document.querySelectorAll('.boxText');
    Array.from(bText).forEach(element=>{
        element.innerText='';
    })
    turn='X';
    isgameover=false;
    document.getElementsByClassName('info')[0].innerText='Turn for ' + turn;
    document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width='0px';
    document.getElementById('res').style.backgroundColor='';
    document.getElementById('res').style.color='black';
    document.querySelector('.line').style.width="";


})