let mario = document.querySelector('.mario');
let pipe = document.querySelector('.pipe');
let clouds = document.querySelector('.clouds');
let planta = document.querySelector('.planta');

function remove(){
    mario.classList.remove('jump');
}

function jump(){
    mario.classList.add('jump');
    setTimeout(remove, 500);
}

function loopGame(){
    pipe = document.querySelector('.pipe');
    planta = document.querySelector('.planta');
    mario = document.querySelector('.mario');
    clouds = document.querySelector('.clouds');
    gameOver = document.querySelector('.game-over');

    let pipePosition = pipe.offsetLeft;
    let plantaPosition = planta.offsetLeft;
    let marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (((pipePosition <= 120 && pipePosition > 0) || (plantaPosition <= 120 && plantaPosition > 0)) 
        && marioPosition < 80){
    
        mario.style.animation = 'none';
        //mario.style.left = '${marioPosition}px';
        mario.style.left = marioPosition +'px';
        mario.src = './img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '25px';

        pipe.style.animation = 'none';
        pipe.style.left = pipePosition + 'px';

        planta.style.animation = 'none';
        planta.style.left = plantaPosition + 'px';

        //pipe.style.left = '${pipePosition}px';   
        let gameOverS = document.getElementById('gameOver');
        gameOverS.style.visibility = "visible";

        clearInterval(loop);
    }  
}

let loop = setInterval(loopGame, 10);
document.addEventListener('keydown', jump);