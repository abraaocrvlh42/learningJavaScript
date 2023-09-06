// Função recursiva para calcular o N-ésimo número triangular
function numeroTriangular(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + numeroTriangular(n - 1);
  }
}

// Função recursiva para imprimir o triângulo equivalente
function imprimirTriangulo(numero, linhaAtual, linha) {
  if (linhaAtual > numero) {
    return;
  }

  let linhaTriangulo = "";
  for (let i = 1; i <= linhaAtual; i++) {
    linhaTriangulo += linha[i] + " ";
  }

  console.log(linhaTriangulo);
  imprimirTriangulo(numero, linhaAtual + 1, linha.concat(numeroTriangular(linhaAtual + 1)));
}

// Função principal
function main() {
  const numeroN = parseInt(prompt("Digite um número natural N:"));
  const nTriangular = numeroTriangular(numeroN);

  console.log(`O ${numeroN}-ésimo número triangular é: ${nTriangular}`);
  console.log("Triângulo equivalente:");

  imprimirTriangulo(numeroN, 1, [1]);
}

main();
