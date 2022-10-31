let age = 18

document.write(`You are ${age} old`)

if (age < 16) {
  document.write('No voting.')
} else if (age < 18 || age > 65) {
  document.write('Optional vote')
} else {
  document.write('Mandatory vote')
}