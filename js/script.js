const formularioArea = document.getElementById('formulario-area');
const valorArea = document.getElementById('valor-area');

formularioArea.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter valores do formulário
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = document.getElementById('valor2').value ? parseFloat(document.getElementById('valor2').value) : null;

    // Calcular área com base na forma selecionada
    // (substitua 'formaAtual' pela forma escolhida, por exemplo, 'circulo', 'triangulo', etc.)
    let area = calcularAreaFormaAtual(valor1, valor2);

    // Exibir o resultado
    if (!isNaN(area)) {
        valorArea.textContent = `Área: ${area.toFixed(2)}`;
    } else {
        valorArea.textContent = 'Erro no cálculo da área.';
    }
});

// Função para calcular a área da forma selecionada (substitua 'formaAtual' pela forma escolhida)
function calcularAreaFormaAtual(valor1, valor2) {
    switch (formaAtual) {
        case 'circulo':
            return Math.PI * Math.pow(valor1, 2);
        case 'triangulo':
            return (valor1 * valor2) / 2;
        case 'quadrado':
            return valor1 * valor1;
        case 'retangulo':
            return valor1 * valor2;
        // Adicione outros casos para as demais formas (romboedro, trapézio irregular, polígono regular, etc.)
        default:
            return NaN;
    }
}
