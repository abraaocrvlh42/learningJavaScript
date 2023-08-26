function calculate() {
  let vel = document.getElementById('.velocity')
  let res = document.getElementById('.result')
  let calc = Number(vel.value)

  result.innerHTML = `Your current speed is: ${vel}km/h`

  if (vel > 60) {
    result.innerHTML += 'Fined for speeding ! '
  }

  result.innerHTML = 'Drive safely ! '
}