const btnSumar = document.getElementById('btnSumar');
const btnRestar = document.getElementById('btnRestar');
const btnMultiplicar = document.getElementById('btnMultiplicar');
const btnDividir = document.getElementById('btnDividir');
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const resultadoLabel = document.getElementById('resultadoLabel');
const resultadoAlert = document.getElementById('resultadoAlert');

const operations = {
  sumar: (a, b) => a + b,
  restar: (a, b) => a - b,
  multiplicar: (a, b) => a * b,
  dividir: (a, b) => a / b,
};

function realizarOperacion(operacion) {
    if (n1.value && n2.value) {
        const resultado = operations[operacion](parseInt(n1.value), parseInt(n2.value));
        resultadoLabel.innerHTML = 'Resultado: ' + resultado;
        resultadoAlert.style.display = 'block';
    } else {
        resultadoAlert.style.display = 'none';
    }
}

btnSumar.addEventListener('click', () => realizarOperacion('sumar'));
btnRestar.addEventListener('click', () => realizarOperacion('restar'));
btnMultiplicar.addEventListener('click', () => realizarOperacion('multiplicar'));
btnDividir.addEventListener('click', () => realizarOperacion('dividir'));