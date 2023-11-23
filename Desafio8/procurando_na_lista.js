const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeAlunoENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)){
        const [listaAlunos, listaMedias] = listaDeAlunosEMedias;

        const indice = listaAlunos.indexOf(aluno);

        const mediaDoAluno = listaMedias[indice];

        console.log(`A media de ${aluno} é ${mediaDoAluno}.`);
    } else {
        console.log('Aluno não encontrado!');
    }
}

exibeAlunoENota('João');
exibeAlunoENota('Juliana');
exibeAlunoENota('Ana');
exibeAlunoENota('Caio');
