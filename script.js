const knop = document.getElementById('knop');
let blokje = document.querySelectorAll('.blok');


const schuif = () => {
  for ( let i = 0; i < blokje.length; i++) {
    blokje[i].classList.toggle('blok--schuif-uit');
  }
}

knop.addEventListener('click', schuif);
