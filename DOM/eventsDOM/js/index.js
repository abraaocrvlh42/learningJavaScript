let a = document.getElementById('area')
let e = document.getElementById('area')
let s = document.getElementById('area')

a.addEventListener('click', clicar)
a.addEventListener('enter', entrar)
a.addEventListener('exit', sair)

function clicar() {
  a.innerText = 'Clicou >.<'
}

function entrar() {
  e.innerText = 'Entrou :)'
}

function sair() {
  s.innerText = 'Saiu :('
}