const inputSide = document.querySelectorAll(".input-side");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const result = document.querySelector("#result");

function sumOfSquare(a,b) {
    sum = a*a + b*b;
    return sum;
}

function calculateHypotenuse() {
    if(inputSide[0].value && inputSide[1].value){
        if(inputSide[0].value > 0 && inputSide[1].value > 0){
          const sum = sumOfSquare(Number(inputSide[0].value), Number(inputSide[1].value));
          const hypotenuse = Math.sqrt(sum);
         result.innerText = "Hypotenuse is "+hypotenuse;
    }
        else{
            result.innerText = "Both the sides must be positive !!";
    }
}
    else{
        result.innerText = "Fill both the input sections properly !!";
    }
}

hypotenuseBtn.addEventListener('click',calculateHypotenuse);