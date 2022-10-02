const angleInput =document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const showResult = document.querySelector("#show-result");

function calculatesumOfAngles(angle1,angle2,angle3){
    const sumOfAngles = angle1+angle2+angle3;
    return sumOfAngles;
}

function checkIsTriangle(){
  const sumOfAngles = calculatesumOfAngles(Number(angleInput[0].value),Number(angleInput[1].value),Number(angleInput[2].value) );
  if(sumOfAngles === 180){
    showResult.innerText="Yes, this is a Triangle"
  }
  else{
    showResult.innerText="No, this is not a Triangle"
  }
}

isTriangleBtn.addEventListener('click', checkIsTriangle );