function updateCaseNumber(product, check, price) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = productInput.value;
  if (check) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }

  // updating amount
  productInput.value = productNumber;
  const productTotal = document.getElementById(product + "-total");
  const productTotalAmount = productNumber * price;
  productTotal.innerText = productTotalAmount;
  calculateTotal()
}

function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}

function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;

  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-amount").innerText = totalPrice;
}

document.getElementById("case-plus").addEventListener("click", function () {
  updateCaseNumber("case", true, 59);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateCaseNumber("case", false, 59);
});

// Phone eventHandle
document.getElementById("phone-plus").addEventListener("click", function () {
  updateCaseNumber("phone", true, 1219);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateCaseNumber("phone", false, 1219);
});
