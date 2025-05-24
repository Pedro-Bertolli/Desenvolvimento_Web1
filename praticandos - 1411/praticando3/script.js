// Solicita o nome da pessoa
let nome = prompt("Qual é o seu nome?");

// Verifica se o nome foi preenchido
if (nome) {
    // Cumprimenta o usuário
    alert('Olá, ' + nome + '!');

    // Pergunta se ele(a) sabe programar em JavaScript
    let sabeProgramar = confirm("Você sabe programar em JavaScript?");

    // Responde de acordo com a resposta
    if (sabeProgramar) {
        alert('Que ótimo ' + nome + ', espero que você aprenda ainda mais!');
    } else {
        alert('Não tem problema, ' + nome + ', você irá aprender agora!');
    }
} else {
    alert("Nome não fornecido. Por favor, recarregue a página e tente novamente.");
}