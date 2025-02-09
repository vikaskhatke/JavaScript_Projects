const bill =  document.querySelector("#bill")
const tip = document.querySelector("#tip")
const total = document.querySelector(".total")
const calculateBtn = document.querySelector("#btn")

function calculateTotal (){
    const billValue = bill.value;
    const tipValue = tip.value;
    const totalValue = billValue*(1+ tipValue/100)
    total.innerText = totalValue
}

calculateBtn.addEventListener("click", calculateTotal)