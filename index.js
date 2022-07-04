
let guessing  = Math.trunc(Math.random() * 20) + 1; 
   

let guessBtn = document.querySelector('.btn');

let resetBtn = document.querySelector('reset-btn');

// This is for the guess button which guesses if the number is high or low
guessBtn.addEventListener("click",function(){
    const inputBtn = Number(document.querySelector('.input').value);

    if(inputBtn == guessing){
       document.querySelector('.message').textContent = 'Hurray Correct Number 😍';
       document.querySelector('.guess-num').textContent = guessing;
       document.querySelector('body').style.backgroundColor = 'green';
    }
    else if(inputBtn > guessing){
        document.querySelector('.message').textContent = 'Too High Number 🤷‍♂️';
    }
    else if (inputBtn < guessing){
        document.querySelector('.message').textContent = 'Too Low Number 🤦‍♀️';
    }
});

document.querySelector('.reset-btn').addEventListener('click', function(){
    document.querySelector('.message').innerText = 'Guessing Meter';
    document.querySelector('body').style.backgroundColor = '#383838';
    guessing  = Math.trunc(Math.random() * 20) + 1; 
    document.querySelector('input').value = '';
    document.querySelector('.guess-num').innerText = '?';
});
