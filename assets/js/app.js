let count = 0;

const numbers = document.getElementById("number")
const btns = document.querySelectorAll(".button")

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
       const style = e.currentTarget.classList
       if (style.contains("decrease")) {
        count --;
       } else if (style.contains("increase")) {
        count ++;
       } else {
        count = 0;
       }
       if (count > 0) {
        numbers.style.color = "green"
       } else if (count < 0) {
        numbers.style.color = "red"
       } else {
        numbers.style.color = "black";
       }
       numbers.textContent = count;
    })
})