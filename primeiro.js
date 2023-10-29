function validarCampo() {
  var campoTexto = document.getElementById("campoTexto").value;
  var palavrasChave = ["Transparente"]; // Adicione suas palavras-chave aqui

  if (campoTexto.trim() === "") {
    alert("Digite sua resposta");
  } else {
    var encontrado = false;
    for (var i = 0; i < palavrasChave.length; i++) {
      if (campoTexto.toLowerCase() === palavrasChave[i].toLowerCase()) {
        encontrado = true;
        break;
      }
    }

    if (encontrado) {
      // Muda a cor da borda para verde se a palavra-chave for encontrada
      document.body.style.border = '4px solid green';

      // Aguarde 3 segundos antes de redirecionar para a nova página
      setTimeout(function () {
        window.location.href = "segundo.html"; // Substitua pelo nome da página desejada
      }, 1000); // 3000 milissegundos = 3 segundos
    } else {
      // Muda a cor da borda para vermelho se a palavra-chave não for encontrada
      document.body.style.border = '3px solid red';
      alert("Resposta incorreta.");
    }
  }
}