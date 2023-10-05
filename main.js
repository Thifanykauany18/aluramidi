function tocaSom (idElementAudiu) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {

   const tecla = listaDeTeclas[contador];
   const instrumento = tecla[contador].classList(1);
   console.log(instrumento)
   const idAudio = #som_${instrumento};
   console.log(idAudio);
   
   
   tecla.onclick = function () { 
       tocaSom(idAudio);
     
     
    contador = contador + 1;

     console.log(contador);
}