

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []
let numeroMaximo =10;




function asignarTextoElemento(elemento,texto) {
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
    return
    
}




function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  

   console.log(intentos);

// comparamos que se igual hasta el tipo de dato si es number con number

// cuando el usuario acerto 
// el disabled es una propiedad que esta en el boton en el html que inpide que el jugador toque el voton jugar el juego de nuevo sin terminar
//el .renove atrribute es el que usamos para quitar el disabled lo quitamos cuando el usuario acerto el numero  y pueda reiniciar el juego
   if (numeroDeUsuario===numeroSecreto) {
    asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ? 'vez':'veces' }`);
    document.getElementById('reiniciar').removeAttribute('disabled')
   } else{
    // el usuario no acerto
    if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p','El numero secreto es menor');
        
    }else{
         asignarTextoElemento('p','El numero secreto es Mayor');

    }

    intentos++;
    limmpiarCaja()

}
   
   
    return
}

function limmpiarCaja(){
   document.querySelector('#valorUsuario').value= '';;
   
}


function generararNumeroSecreto() {
     let nueroGenerado = Math.floor(Math.random()*numeroMaximo)+1;   
     // si el numero generado esta incluido en la lista    hacemos el if
     console.log(nueroGenerado,listaNumerosSorteados);
     


//si ya soteamos todos los numeros
if (listaNumerosSorteados.length == numeroMaximo){ 
    asignarTextoElemento('p','Ya se sortearon todos los numeross Posibles');

    } else{
        // el includes recorre todo el arrglo para saber si algo ya existe
        if (listaNumerosSorteados.includes(nueroGenerado)) {
            return generararNumeroSecreto();
        } else {
            listaNumerosSorteados.push(nueroGenerado);
            
            return nueroGenerado;
        }

    }



}




function condicionesIniciales() { 
asignarTextoElemento('h1', 'Juego del numero secreto¡');
asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
numeroSecreto = generararNumeroSecreto()
intentos = 1;
}

function reniciarJuego() {

    //limpiar caja
    limmpiarCaja();
    //indicar mensaje de numero
    condicionesIniciales ();
  // generar el numero alateorio 

    //Deshabilitar el boton de nuevo juego
    // aqui settamos con el setAtribute para poner y desabilitar el boton nueno juego  cada que se reinicie con el true  dice d

    document.querySelector('#reiniciar').setAttribute('disabled',true)
   // inicializar el numer de intentos

    
}





condicionesIniciales()