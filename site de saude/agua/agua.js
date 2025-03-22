const formAgua = document.getElementById('form-agua');
const litros = document.getElementById('litros');

formAgua.addEventListener('submit', (event) => {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const atividade = document.getElementById('atividade').value;

    let litrosDiarios = 0;

    if (atividade === 'leve') {
        litrosDiarios = peso * 0.035;
    } else if (atividade === 'moderado') {
        litrosDiarios = peso * 0.040;
    } else if (atividade === 'intenso') {
        litrosDiarios = peso * 0.045;
    }

    litros.textContent = `${litrosDiarios.toFixed(1)} litros`;
});

document.getElementById("btn-home").addEventListener("click", function() {
    window.location.href = "/home/index.html";
});
