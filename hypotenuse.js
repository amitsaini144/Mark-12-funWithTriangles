const inputSide = document.querySelectorAll(".input-side");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const result = document.querySelector("#result");

function sumOfSquare(a,b) {
    console.log("here22")
    sum = a*a + b*b;
    return sum;
}

function calculateHypotenuse() {
    console.log("here")
    const sum = sumOfSquare(Number(inputSide[0].value), Number(inputSide[1].value));
    const hypotenuse = Math.sqrt(sum);
    result.innerText = "Hypotenuse is "+hypotenuse;
}

hypotenuseBtn.addEventListener('click',calculateHypotenuse);