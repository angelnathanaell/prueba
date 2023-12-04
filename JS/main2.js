function calculateLoan() {

    var loanAmount = parseFloat(document.getElementById('loanAmount').value);
    var loanTerm = parseFloat(document.getElementById('loanTerm').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);


    if (isNaN(loanAmount) || isNaN(loanTerm) || isNaN(interestRate) || loanAmount <= 0 || loanTerm <= 0 || interestRate <= 0) {
        alert("Por favor, ingrese un monto, plazo y tasa de interés válidos.");
        return;
    }


    var monthlyInterestRate = interestRate / 12 / 100;


    var monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));


    document.getElementById('monthlyPayment').innerText = "$" + monthlyPayment.toFixed(2);
}
    /*
    La fórmula básica para calcular la cuota de un préstamo con el formato de cuota periódica 
    constante (sistema francés) sería la siguiente:

            Ci / 1-(1+i)-n

    “C” es el capital del préstamo pendiente al inicio del período de interés, “i” es el tipo de interés
    nominal anual expresado en tantos por unidad, “n” el número de cuotas anuales de duración del préstamo.-->*/
 
