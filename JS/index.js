function bgChange(elementId) {
  const targetElement = document.getElementById(elementId);
  targetElement.classList.add("bg-[#1dd100]", "text-white");
  targetElement.classList.remove("bg-[#F7F8F8]", "text-[#03071280]");
}

let seatList = [];
function selectedSeats(elementId) {
  if (seatList.includes(elementId) == false && seatList.length <= 3) {
    seatList.push(document.getElementById(elementId).innerText);

    bgChange(elementId);

    document.getElementById("total-selected-seat").innerText = seatList.length;
    document.getElementById("seat-left").innerText = 40 - seatList.length;
    document.getElementById("total-price").innerText = seatList.length * 550;
    document.getElementById("grand-total").innerText = seatList.length * 550;

    let parent = document.getElementById("seat-selection");
    let child = document.createElement("p");

    child.innerText =
      document.getElementById(elementId).innerText + " " + "AC_Business 550";
    child.classList.add("word-spacing");
    parent.appendChild(child);
  } else {
    window.alert("You can not select more than 4 tickets");
  }

  if (seatList.length === 4) {
    document.getElementById("apply").removeAttribute("disabled");
  }

  if (seatList.length > 4) {
    window.alert("You can not select more than 4 tickets");
  }
}

function couponValidation() {
  const coupon = document.getElementById("coupon").value;
  if (coupon === "NEW15" || coupon === "Couple 20") {
    document.getElementById("gaibul-hawa").classList.add("hidden");
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
  if (seatList.length !== 0 && typeof (number === "number") && !isNaN(number)) {
    document.getElementById("next").removeAttribute("disabled");
  } else {
    document.getElementById("next").setAttribute("disabled", true);
  }
});
