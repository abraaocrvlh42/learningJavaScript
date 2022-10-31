// Rental Car

let btn = document.querySelector(".btn")
let valueTotalInput = document.querySelector('.amount')

btn.addEventListener('click', function () {
  let dailyQuantity = Number(
    document.querySelector('.dailyQuantity').value)
      
  let valueMileageRound = Number(
    document.querySelector(".valueMileageRound").value
      )

    valueTotalInput.value = dailyQuantity + valueMileageRound
})