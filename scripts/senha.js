function alternarVisibilidadeSenha() {
    var campoSenha = document.getElementById('senha');
    var botaoMostrarSenha = document.querySelector('button');
  
    if (campoSenha.type === 'password') {
      campoSenha.type = 'text';
      botaoMostrarSenha.textContent = 'Ocultar Senha';
    } else {
      campoSenha.type = 'password';
      botaoMostrarSenha.textContent = 'Mostrar Senha';
    }
  }