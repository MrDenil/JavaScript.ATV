function maiorMenor() {
    // Obtém os valores do campo "numeros", separa e converte em números
    let valores = document.getElementById("numeros").value.split(',').map(Number);

    // Encontra o maior e o menor valor
    let maior = Math.max(...valores);
    let menor = Math.min(...valores);

    // Exibe o resultado
    document.getElementById("resultado1").innerHTML = "Maior valor: " + maior + "<br>Menor valor: " + menor;
}

function verificarVogal() {
    // Obtém o caractere do formulário
    let caractere = document.getElementById("caractere").value.toLowerCase();

    // Lista de vogais
    const vogais = ['a', 'e', 'i', 'o', 'u'];

    // Verifica se o caractere está na lista de vogais
    let resultado = vogais.includes(caractere) ? 1 : 0;

    // Exibe o resultado
    document.getElementById("resultado2").innerHTML = resultado === 1 ? "(1) É uma vogal!" : "(0) Não é uma vogal.";
}

function numerosPares() {
    let li = parseInt(document.getElementById("li").value);
    let ls = parseInt(document.getElementById("ls").value);

    let numerosPares = [];
    let somaPares = 0;

    for (let i = li + 1; i < ls; i++) {
        if (i % 2 === 0) {
            numerosPares.push(i);
            somaPares += i;
        }
    }

    document.getElementById("resultado3").innerHTML = 
        "Números Pares: " + numerosPares.join(", ") + "<br>Somatório: " + somaPares;
}

function ordenar() {
    let numeros = [];
    numeros.push(parseInt(document.getElementById("num1").value));
    numeros.push(parseInt(document.getElementById("num2").value));
    numeros.push(parseInt(document.getElementById("num3").value));

    numeros.sort((a, b) => a - b);

    document.getElementById("resultado4").innerHTML = "Números ordenados: " + numeros.join(", ");
}

function verificarSinal() {
    let x = parseInt(document.getElementById("numero").value);
    
    let isPositivo = x >= 0;

    document.getElementById("resultado5").innerHTML = 
        isPositivo ? "O número é positivo." : "O número é negativo.";
}

function verificarParImpar() {
    let x = parseInt(document.getElementById("numeroParImpar").value);
    
    let isPar = (x % 2 === 0);

    document.getElementById("resultado6").innerHTML = 
        isPar ? "O número é par." : "O número é ímpar.";
}
