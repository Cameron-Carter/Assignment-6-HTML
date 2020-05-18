// JavaScript File
let size;
let toppings;
let l;
let xl;
let i;
let ii;
let iii;
let iv;
const tax = 1.13;
let total;

function pizzaCost () {
    //
    size = document.getElementById("size").value;
    toppings = document.getElementById("toppings").value;
    l = document.getElementById("l").value;
    xl = document.getElementById('xl').value;
    i = document.getElementById('i').value;
    ii = document.getElementById('ii').value;
    iii = document.getElementById('iii').value;
    iv = document.getElementById('iv').value;
    total = 0;
    //
    if (size == l) {
        total = 6;
    }
    else {
        total = 10;
    }
    //
    if (toppings == i) {
        total = total + 1.00;
    }
    else if (toppings == ii) {
        total = total + 1.75;
    }
    else if (toppings == iii) {
        total = total + 2.50;
    }
    else {
        total = total + 3.35;
    }
    //
    total = total * tax;
    //Math.round(total).toFixed(2);
    alert("Your total is $" + total.toFixed(2) + ".");
}
document.getElementById("btn").addEventListener("click", pizzaCost);