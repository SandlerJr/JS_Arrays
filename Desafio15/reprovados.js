const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 7.5];
const notaDeAprovação = 7;

const reprovados = alunos.filter((aluno, indice) => {
    return notas[indice] < notaDeAprovação ;
});

console.log(reprovados);