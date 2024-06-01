//Aca el juego selecciona un numero al azar para que adivines
let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada') 
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

//ESTA ACCION SE VA A EJECUTAR CUANDO SE TOQUE EL BOTON CHEQUEAR
function chequearResultado(){
    intentos++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = "Por favor, introduce un numero valido entre 1 y 100"
        mensaje.style.color = 'black'
        return
    }

    if(numeroIngresado === numeroAzar){
        mensaje.textContent = "¡Felicitaciones! ¡Has adivinado el numero!"
        mensaje.style.color = 'green'
        numeroEntrada.disabled = true
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = "¡Mas alto! El numero es mayor al que dijiste"
        mensaje.style.color = 'red'
    }else{
        mensaje.textContent = "¡Mas bajo! El numero es menor al que dijiste"
        mensaje.style.color = 'red'
    }
}