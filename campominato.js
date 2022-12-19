console.log('JS OK')

/*
1)genero 100 celle per 10 righe al click del button
2)per ogni cella creo un event listener che va a cambiarre il colore di background

*/


// prendo gli elementi 
let button = document.querySelector('button');
const grid = document.getElementById('grid-container');
const rows = 10
const col = 10
const totalcells = (rows * col);
let score = 0

// creo una function che mi permettta di generare numeri casuali UNICI


const getRandomNumbers = () =>{
    const randomNumbers = Math.floor(Math.random() * totalcells) + 1;
    return randomNumbers;
}

 for(i=1; i <= 16; i++ ){

     getRandomNumbers()
     console.log(getRandomNumbers)
 }

// aggiungo un event listener per generare le caselle al click
button.addEventListener('click', function(){
   
   for(i=1; i <= totalcells; i++ ){
       let cell = document.createElement('div');
       cell.innerHTML = i
       grid.appendChild(cell);
       cell.classList.add('grid-cell');

// aggiungo un altro event listener per cambiare il colore delle caselle
       cell.addEventListener('click',function(){
           cell.classList.add('click-azure')
           score += 1
           cell.classList.add('click-stop')
           console.log(cell.innerText,score)
       },{once : true})
       }
   },{once : true})
  



