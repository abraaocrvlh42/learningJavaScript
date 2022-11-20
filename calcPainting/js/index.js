// Script to calculate the area and amount of paint needed for painting

let width = document.getElementById('width')
let height = document.getElementById('height')
let calculate = document.getElementById('calculate')
let res = document.getElementById('result')

function calcPaint() {
  let wid = Number(width.value)
  let hei = Number(height.value)

  let calc = wid * hei

  calculate.innerHTML = `The result is: ${calc}`
}