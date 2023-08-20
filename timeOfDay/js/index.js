// Script to manipulate date and time

function timeOfDay() {
  let msg = document.querySelector('.msg')
  let img = document.querySelector('.image')

  let date = new Date()
  let hour = date.getHours()

  msg.innerHTML = `The current time is: ${hour}`

  if(hour >= 0 && hour < 12) {
    img.src = 'morning.jpg'
    document.body.style.background = '#FDB48B'
  } else if (hour >= 12 && hour < 18) {
    img.src = 'afternoon.jpg'
    document.body.style.background = '#8298B0'
  } else {
    img.src = './img/night.jpg'
    document.body.style.background = '#222324'
  }
}