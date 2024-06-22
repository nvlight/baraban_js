let container = document.querySelector(".container");
let btn = document.getElementById("spin"); // Corrected the selector for the button
let number = Math.ceil(Math.random() * 2000);

btn.addEventListener("click", noun); 

function noun() {
    container.style.transform = "rotate(" + number + "deg)"; // Corrected the assignment syntax

    number += Math.ceil(Math.random()  * 1000); // Added correct calculation for 'number'
    if (container.style.transform= "rotate" === "0deg") {
        console.log("fjasdlfjsdl");
    }
}
