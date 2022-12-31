const entradaTexto = document.querySelector('#entrada-texto');
const resultado = document.querySelector('#resultado');

const btnCriptografar = document.querySelector('#criptografar');
const btnDescriptografar = document.querySelector('#descriptografar');
const btnCopiar = document.querySelector('#copiar');


function verificarEntrada(texto) {
    if (!texto.match(/^[a-z\s]*$/)) {
      alert("Por favor, digite apenas letras minúsculas sem acento.");
      return false;
    }
    return true;
  }

function criptografar() {

    if (!verificarEntrada(entradaTexto.value)) {
        return;
    }

    var texto = entradaTexto.value;
    var textoCriptografado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
    resultado.value = textoCriptografado;

    document.getElementById('criptografar').textContent = "Criptografado!";

    setInterval(function() {
        document.getElementById('criptografar').textContent = "Criptografar";
    } , 3000
    );
};

function descriptografar() {

    if (!verificarEntrada(entradaTexto.value)) {
        return;
    }

    var textoCriptografado = entradaTexto.value;
    var texto = textoCriptografado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
    resultado.value = texto;

    document.getElementById('descriptografar').textContent = "Descriptografado!";

    setInterval(function() {
        document.getElementById('descriptografar').textContent = "Descriptografar";
    } , 3000
    );
};

function copiar() {
    var textoCriptografado = resultado.value;
    if (navigator.clipboard.writeText(textoCriptografado)) {

        document.getElementById('copiar').textContent = "Copiado!";
    }

    setInterval(function() {
        document.getElementById('copiar').textContent = "Copiar";
    } , 3000
    );
}


btnCopiar.onclick = criptografar;
btnCopiar.onclick = descriptografar;
btnCopiar.onclick = copiar;


entradaTexto.style.cssText = `height: ${entradaTexto.scrollHeight}px;`;

entradaTexto.addEventListener("input", function(){
    this.style.height = "auto";
    this.style.height = `${this.scrollHeight}px`;
});