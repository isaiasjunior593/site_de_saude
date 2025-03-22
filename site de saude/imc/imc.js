function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const imc = peso / (altura * altura);

    document.getElementById("imc").textContent = imc.toFixed(2);

    let classificacao;
    if (imc < 18.5) {
        classificacao = "Magreza";
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = "Peso Normal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade Grau I";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III (mórbida)";
    }

    document.getElementById("classificacao").textContent = classificacao;
}

document.getElementById("btn-home").addEventListener("click", function() {
    window.location.href = "/index.html";
});



