// Rental Car

let btn = document.querySelector(".btn-form");
    let valorTotalInput = document.querySelector(".valorTotal");

    btn.addEventListener("click", function () {
      let dailyQuantity = Number(
        document.querySelector(".dailyQuantity").value
      );
      let valueMileageRound = Number(
        document.querySelector(".valueMileageRound").value
      );

      valorTotalInput.value = dailyQuantity + valueMileageRound;
    });