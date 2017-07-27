
// All elements that animate //
const IDs = ['lbP', 'lbA', 'lbY', 'lbM', 'lbPrightwing', 'lbPleftwing', 'lbArightwing', 'lbAleftwing',  'lbYrightwing', 'lbYleftwing', 'lbMrightwing', 'lbMleftwing'];

const LADYBIRD = ['P','A', 'Y', 'M'];

// auto-clear animation classes on completion //
IDs.forEach(function(id) { 
   let element = document.querySelector(`#${id}`);
   element.addEventListener('animationend', function(){element.classList.remove('rightFlap', 'leftFlap', 'spin')})
})


function makeFlap(letter) {
   let rightwing = document.querySelector(`#lb${letter}rightwing`);
   let leftwing = document.querySelector(`#lb${letter}leftwing`);
   rightwing.classList.add('rightFlap');
   leftwing.classList.add('leftFlap');
}

function spin(letter) {
   let ladybird = document.querySelector(`#lb${letter}`);
   ladybird.classList.add('spin');
}

function random(array) {
   return array[Math.floor(Math.random() * array.length)];
}

setInterval(function(){makeFlap(random(LADYBIRD))},2500);
setInterval(function(){spin(random(LADYBIRD))},3000);


   