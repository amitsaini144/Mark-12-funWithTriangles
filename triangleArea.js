const inputs = document.querySelectorAll(".input-side");
const areaBtn = document.querySelector("#area-btn");
const result = document.querySelector("#result");

function calculateSideProduct(height,base){
    const sideProduct = height*base;
    return sideProduct; 
}

function calculateAreaOfTriangle(){
    if(inputs[0].value&&inputs[1].value){
        if(inputs[0].value > 0 &&inputs[1].value > 0){
    const sideProduct = calculateSideProduct(Number(inputs[0].value), Number(inputs[1].value));
    const areaOfTriangle = sideProduct/2;
    result.innerText = "Area of Triangle = "+areaOfTriangle;
}
else{
    result.innerText = "Both the sides must be positive !!";
}
    }
else{
    result.innerText = "Please fill both sections properly !!";
}
}


areaBtn.addEventListener('click', calculateAreaOfTriangle);