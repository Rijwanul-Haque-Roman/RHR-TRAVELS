function bgChange(elementId) {
  const targetElement = document.getElementById(elementId);
  targetElement.classList.add("bg-[#1dd100]", "text-white");
  targetElement.classList.remove("bg-[#F7F8F8]", "text-[#03071280]");
}

let seatList = [];
function selectedSeats(elementId) {
  seatList.push(document.getElementById(elementId).innerText);
  if (seatList.length <= 4) {
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
  }

  if (seatList.length === 4) {
    document.getElementById("apply").removeAttribute("disabled");
  }
}

function couponValidation() {
  const coupon = document.getElementById("coupon").value;
  if (coupon === "NEW15" || coupon === "Couple 20") {
    document.getElementById("gaibul-hawa").classList.add("hidden");
    if (coupon === "NEW15") {
      document.getElementById("grand-total").innerText = 2200 - 330;
    } else if (coupon === "Couple 20") {
      document.getElementById("grand-total").innerText = 2200 - 440;
    }
  } else {
    window.alert("Wrong Coupon Code!");
  }
}
