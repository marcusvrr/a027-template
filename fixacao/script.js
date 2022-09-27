let paragrafo = document.getElementById('paragrafo')

let input = document.getElementById('texto');

function trocaTexto() {
    paragrafo.innerHTML =  input.value;
}

//paragrafo.innerHTML =  paragrafo.innerHTML+' '+input.value; PRA POR ESPAÇO