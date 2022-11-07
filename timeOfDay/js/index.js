// Script to manipulate date and time

function timeOfDay() {
  let msg = document.querySelector('.msg')
  let img = document.querySelector('.image')

  let date = new Date()
  let hour = date.getHours()

  msg.innerHTML = `The current time is: ${hour}`

  if(hour >= 0 && hour < 12) {

  } else if(hour >= 12 && hour < 18) {

  } else {
    
  }
}