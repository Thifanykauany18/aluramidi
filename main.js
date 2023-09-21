// Pom-----------------------------------------
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

 const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
 
//enquanto
 white(contador < listaDeTeclas.length) {

    listaDeTeclas[contador].onclick = tocaSomPom;

    contador = contador + 1;

    console.log(contador);
 }