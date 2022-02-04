n = 0;
let value; //Iniciar a variável valor

if (value > 0 || value % 2 === 0) {
  //Condicional que valida se valor maior que 0 ou a diferença é maior que 0
  while (n < value) {
    //Enquando o index do laço de repetição for menor que o valor ele continua
    let n = n + 2; // Váriavell i incremento mais 2 em cada laço
    if (n > value) {
      break;
    } else {
      console.log(n); // Imprime no console o valor de i
    }
  }
}
