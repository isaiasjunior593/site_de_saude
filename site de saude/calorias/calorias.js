const formCalorias = document.getElementById('form-calorias');
const calorias = document.getElementById('calorias');

formCalorias.addEventListener('submit', (event) => {
    event.preventDefault();

    const sexo = document.getElementById('sexo').value;
    const idade = parseInt(document.getElementById('idade').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const atividade = document.getElementById('atividade').value;

    let caloriasDiarias = 0;

    if (sexo === 'masculino') {
        caloriasDiarias = (10 * peso) + (6.25 * altura) - (5 * idade) + 5;
    } else if (sexo === 'feminino') {
        caloriasDiarias = (10 * peso) + (6.25 * altura) - (5 * idade) - 161;
    }

    if (atividade === 'leve') {
        caloriasDiarias *= 1.2;
    } else if (atividade === 'moderado') {
        caloriasDiarias *= 1.55;
    } else if (atividade === 'intenso') {
        caloriasDiarias *= 1.9;
    }

    calorias.textContent = `${caloriasDiarias.toFixed(0)} calorias`;
});

document.getElementById("btn-home").addEventListener("click", function() {
    window.location.href = "/home/index.html";
});
