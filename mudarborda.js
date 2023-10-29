// Seleciona o campo de texto pelo ID
const campoTexto = document.getElementById('campoTexto');

// Adiciona um ouvinte de eventos para detectar a entrada de texto
campoTexto.addEventListener('input', () => {
  // Muda a cor da borda para azul
  document.body.style.border = '4px solid orange';
});

// Você também pode adicionar um evento para reverter a cor da borda quando o campo estiver vazio
campoTexto.addEventListener('input', () => {
  if (campoTexto.value === '') {
    // Muda a cor da borda de volta para a cor original (por exemplo, preta)
    document.body.style.border = '4px solid white';
  }
});