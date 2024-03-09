function scrollToSection() {
  const section = document.getElementById("ticket-purchase-section");
  section.scrollIntoView({ behavior: "smooth" });
}

function bgChange(elementId) {
  const targetElement = document.getElementById(elementId);
  if (targetElement.classList.contains("bg-[#F7F8F8]")) {
    targetElement.classList.add("bg-[#1dd100]", "text-white");
    targetElement.classList.remove("bg-[#F7F8F8]", "text-[#03071280]");
  } else {
    targetElement.classList.remove("bg-[#1dd100]", "text-white");
    targetElement.classList.add("bg-[#F7F8F8]", "text-[#03071280]");
  }
}

function ShowSelectedSeat(seatName) {
  const parent = document.getElementById("seat-selection");

  const container = document.createElement("div");
  container.classList.add("flex", "justify-between");
  container.id = seatName + "-seat";
  console.log(container.id);

  const seat = document.createElement("p");
  const seatType = document.createElement("p");
  const SeatPrice = document.createElement("p");

  seat.innerText = seatName;
  seatType.innerText = "AC_Business";
  SeatPrice.innerText = "550";

  container.appendChild(seat);
  container.appendChild(seatType);
  container.appendChild(SeatPrice);

  parent.appendChild(container);
}

function deleteSeat(seatName) {
  const seat = document.getElementById(seatName + "-seat");
  console.log(seat);
  seat.remove();
}

const seats = document.getElementById("allSeats");
let selectedSeats = [];

seats.addEventListener("click", function (event) {
  const seat = event.target.innerText;

  bgChange(seat);

  if (!selectedSeats.includes(seat)) {
    if (selectedSeats.length < 4) {
      selectedSeats.push(seat);
      ShowSelectedSeat(seat);
    } else {
      window.alert("You can not buy more than 4 seats");
      bgChange(seat);
    }
  } else {
    selectedSeats.splice(selectedSeats.indexOf(seat), 1);
    deleteSeat(seat);
  }

  const seatLeft = document.getElementById("seat-left");
  const totalSelectedSeats = document.getElementById("total-selected-seat");
  seatLeft.innerText = 40 - selectedSeats.length;
  totalSelectedSeats.innerText = selectedSeats.length;

  document.getElementById("total-price").innerText = selectedSeats.length * 550;
  document.getElementById("grand-total").innerText = selectedSeats.length * 550;

  if (selectedSeats.length === 4) {
    document.getElementById("apply").removeAttribute("disabled", true);
  } else {
    document.getElementById("apply").setAttribute("disabled", true);
  }
});

function couponValidation() {
  const coupon = document.getElementById("coupon").value;
  if (coupon === "NEW15" || coupon === "Couple 20") {
    document.getElementById("gaibul-hawa").classList.add("hidden");

    for (const seat of selectedSeats) {
      document.getElementById(seat).setAttribute("disabled", true);
    }

    document.getElementById("discount-container").classList.remove("hidden");
    if (coupon === "NEW15") {
      document.getElementById("discount").innerText = 330;
      document.getElementById("grand-total").innerText = 2200 - 330;
    } else if (coupon === "Couple 20") {
      document.getElementById("discount").innerText = 440;
      document.getElementById("grand-total").innerText = 2200 - 440;
    }
  } else {
    window.alert("Wrong Coupon Code!");
  }
}

document.getElementById("phone").addEventListener("keyup", function (event) {
  const number = parseInt(event.target.value);
  if (
    selectedSeats.length !== 0 &&
    typeof (number === "number") &&
    !isNaN(number)
  ) {
    document.getElementById("next").removeAttribute("disabled", true);
  } else {
    document.getElementById("next").setAttribute("disabled", true);
  }
});

function reload() {
  window.location.reload();
}
