<<<<<<< HEAD
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

=======
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

>>>>>>> 82e6daffecaf1866a797d97a89e59e232dfa5ea3
close.addEventListener('click', () => container.classList.remove('show-nav'))