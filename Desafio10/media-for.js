const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (indice = 0; indice < notas.length; indice++){
    somaDasNotas += notas[indice];      
}

const media = somaDasNotas / notas.length; 
console.log(`A media das notas é ${media}`);