let boton = document.getElementById('boton')
let body = document.querySelector('body')
let icone = document.getElementById('icon');

boton.addEventListener('click', () => {
    boton.classList.toggle('dark')
    body.classList.toggle('dark')

    if (body.classList.contains('dark')) {
        icone.classList.remove('bi-brightness-high-fill');
        icone.classList.add('bi-moon-fill');
    } else {
        icone.classList.remove('bi-moon-fill');
        icone.classList.add('bi-brightness-high-fill');
    }

})