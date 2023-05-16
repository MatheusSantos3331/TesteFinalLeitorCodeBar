document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const btn2 = document.getElementById('btn2');

    function checkInputs() {
  if (emailInput.value && senhaInput.value) {
    btn2.classList.add('btn-preenchido');
  } else {
    btn2.classList.remove('btn-preenchido');
  }
}

emailInput.addEventListener('input', checkInputs);
senhaInput.addEventListener('input', checkInputs);
  });