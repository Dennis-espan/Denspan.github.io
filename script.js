// Função para obter uma piada aleatória da JokeAPI
function getRandomJoke() {
  fetch('https://v2.jokeapi.dev/joke/Any?type=single') // Usando piada do tipo 'single'
    .then(response => response.json())
    .then(data => {
      // Verifica se foi obtida uma piada
      if (data.joke) {
        displayJoke(data.joke); // Exibe a piada
      } else {
        alert('Erro ao carregar a piada.');
      }
    })
    .catch(error => console.error('Erro na requisição:', error));
}

// Função para exibir a piada no card
function displayJoke(joke) {
  const cardContainer = document.getElementById('cardContainer');

  // Cria o card
  const card = document.createElement('div');
  card.classList.add('card');

  // Cria o elemento para exibir a piada como texto
  const jokeText = document.createElement('p');
  jokeText.textContent = joke; // Coloca a piada no card

  // Cria a caixa de edição (textarea), inicialmente invisível
  const editTextArea = document.createElement('textarea');
  editTextArea.value = joke; // Coloca a piada no campo de edição
  editTextArea.style.display = 'none'; // A caixa de edição começa oculta

  // Função para alternar entre editar e exibir a piada
  function toggleEdit() {
    // Alterna a visibilidade entre o texto e a área de edição
    if (editTextArea.style.display === 'none') {
      jokeText.style.display = 'none'; // Esconde o texto
      editTextArea.style.display = 'block'; // Mostra a caixa de texto
      editBtn.textContent = 'Concluído'; // Altera o texto do botão para "Concluído"
      editBtn.classList.add('completed'); // Adiciona a classe para mudar a cor do botão
    } else {
      jokeText.style.display = 'block'; // Mostra o texto
      editTextArea.style.display = 'none'; // Esconde a caixa de texto
      editBtn.textContent = 'Editar'; // Altera o texto do botão para "Editar"
      editBtn.classList.remove('completed'); // Remove a classe para restaurar a cor original

      // Atualiza o texto da piada com o conteúdo da caixa de edição
      jokeText.textContent = editTextArea.value;
    }
  }

  // Cria os botões: Editar e Apagar
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit-btn');
  editBtn.textContent = 'Editar';
  editBtn.onclick = toggleEdit;

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'Apagar';
  deleteBtn.onclick = function() {
    cardContainer.removeChild(card); // Remove o card do contêiner
  };

  // Adiciona os elementos ao card
  card.appendChild(jokeText);
  card.appendChild(editTextArea);
  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(deleteBtn);
  card.appendChild(buttonContainer);

  // Adiciona o card ao contêiner
  cardContainer.appendChild(card);
}

// Função para criar um card vazio (sem piada inicial)
function createEmptyCard() {
  const cardContainer = document.getElementById('cardContainer');

  // Cria o card
  const card = document.createElement('div');
  card.classList.add('card');

  // Cria o elemento para exibir a piada como texto (inicialmente vazio)
  const jokeText = document.createElement('p');
  jokeText.textContent = ''; // Não há piada inicial

  // Cria a caixa de edição (textarea), visível desde o início
  const editTextArea = document.createElement('textarea');
  editTextArea.placeholder = "Escreva sua piada aqui..."; // Texto de ajuda para o usuário
  editTextArea.style.display = 'block'; // A caixa de edição já deve estar visível

  // Função para alternar entre editar e exibir a piada
  function toggleEdit() {
    // Alterna a visibilidade entre o texto e a área de edição
    if (editTextArea.style.display === 'none') {
      jokeText.style.display = 'none'; // Esconde o texto
      editTextArea.style.display = 'block'; // Mostra a caixa de texto
      editBtn.textContent = 'Concluído'; // Altera o texto do botão para "Concluído"
      editBtn.classList.add('completed'); // Muda a cor do botão para verde
    } else {
      jokeText.style.display = 'block'; // Mostra o texto
      editTextArea.style.display = 'none'; // Esconde a caixa de texto
      editBtn.textContent = 'Editar'; // Altera o texto do botão para "Editar"
      editBtn.classList.remove('completed'); // Restaura a cor original

      // Atualiza o texto da piada com o conteúdo da caixa de edição
      jokeText.textContent = editTextArea.value;
    }
  }

  // Cria os botões: Editar e Apagar
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit-btn');
  editBtn.textContent = 'Editar';
  editBtn.onclick = toggleEdit;

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'Apagar';
  deleteBtn.onclick = function() {
    cardContainer.removeChild(card); // Remove o card do contêiner
  };

  // Adiciona os elementos ao card
  card.appendChild(jokeText);
  card.appendChild(editTextArea);
  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(deleteBtn);
  card.appendChild(buttonContainer);

  // Adiciona o card ao contêiner
  cardContainer.appendChild(card);
}
