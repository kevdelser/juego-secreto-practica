let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1 ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //EL usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor'); 
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sorteraron todos los numeros')
    } else {
        //Si el número generado esta en la lista hacemo una operación
        if (listaNumerosSorteados.includes(numeroGenerado)) {
             return generarNumeroSecreto();

        }   else {
              listaNumerosSorteados.push(numeroGenerado);
              return numeroGenerado;
        
        }
    }
    
    

    
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reinciarJuego() {
    //Limpiar la Caja
    limpiarCaja();
    //Indicar mensaje inicial de núnmeros
    //Generar el número aleatorio
    //Reiniciar intentos
    condicionesIniciales();
    //Deshabilitar botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();