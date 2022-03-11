var hr = 00
var min = 00
var seg = 00

var interval

function doisDigitos(digito) {
    if (digito < 10){
        return("0" + digito)
    }else {
        return (digito)
    }
}

function iniciar() {
    contagem()
    interval = setInterval(contagem, 1000);
}
function pausar() {
    clearInterval(interval)
}
function reiniciar() {
    clearInterval(interval)
    hr = 00
    min = 00
    seg = 00
    
    document.getElementById('cronometro').innerText = '00:00:00'
}
function contagem() {
    seg++
    if(seg == 60){
        min++
        seg = 00
        }if (min == 60) {
        min = 0
        hr++
    }
        document.getElementById("cronometro").textContent = doisDigitos(hr) + ':' + doisDigitos(min) + ':' + doisDigitos(seg)
}