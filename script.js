function mudarCampo(event, proximoCampoId) {
  if (event.key === "Enter") {
    document.getElementById(proximoCampoId).focus();
    event.preventDefault(); // Impede o comportamento padrão do Enter (como submeter um formulário)
  }
}

function formatar() {
  //Nome
  //Selecionar conteudo do input
  let nome = document.getElementById("nome").value;

  // Converte a primeira letra para maiúscula e o restante para minúscula
  nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

  //Sobrenome
  let sobrenome = document.getElementById("sobrenome").value;

  sobrenome =
    sobrenome.charAt(0).toUpperCase() + sobrenome.slice(1).toLowerCase();

  //Idade
  let idade = document.getElementById("idade").value;

  //Data de Nascimento
  let nascimento = document.getElementById("nascimento").value;

  let datas = nascimento.split("-");

  let dataFormatada = datas[2] + "/" + datas[1] + "/" + datas[0];

  //sexo
  let sexo = document.querySelector('input[name="sexo"]:checked').id;

  let email = document.getElementById("email").value;

  let contato = document.getElementById("contato").value;

  let endereco = document.getElementById("endereco").value;

  let complemento = document.getElementById("complemento").value;

  // Seleciona todas as tags <p> com a classe 'error'
  let errors = document.querySelectorAll("p.error");

  // Verifica se há elementos correspondentes
  if (errors.length > 0) {
    // Itera sobre cada elemento e define o conteúdo interno
    errors.forEach((error) => {
      error.innerHTML = "Obrigatório!";

      // Define um tempo limite (por exemplo, 3000 milissegundos = 3 segundos)
      const timeoutDuration = 3000;

      // Aguarda o tempo limite e, em seguida, remove o texto
      setTimeout(() => {
        error.innerHTML = "";
      }, timeoutDuration);
    });
  } else {
    // Não há elementos correspondentes
  }

  let conteudo = document.getElementById("conteudo");

  conteudo.innerHTML = `
    <p>Nome: ${nome} ${sobrenome}</p>
    <p>Idade: ${idade}</p>
    <p>Data de Nascimento: ${dataFormatada}</p>
    <p>Sexo: ${sexo}</p>
    <p>Email: ${email}</p>
    <p>Contato: ${contato}</p>
    <p>Endereço: ${endereco}</p>
    <p>Complemento: ${complemento}</p>
  `;
}
