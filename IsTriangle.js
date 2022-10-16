const angleInput =document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const showResult = document.querySelector("#show-result");

function calculatesumOfAngles(angle1,angle2,angle3){
    const sumOfAngles = angle1+angle2+angle3;
    return sumOfAngles;
    
}

function checkIsTriangle(){
  if(angleInput[0].value &&angleInput[1].value && angleInput[2].value){ 
    if(angleInput[0].value > 0 &&angleInput[1].value > 0 && angleInput[2].value > 0){
  const sumOfAngles = calculatesumOfAngles(Number(angleInput[0].value),Number(angleInput[1].value),Number(angleInput[2].value) );

      if(sumOfAngles === 180){
         showResult.innerText="Yes, this is a Triangle."
        }
      else{
        showResult.innerText="No, this is not a Triangle."
      }

    }
    else{
      showResult.innerText="Enter positive values only !!"
    }
}
else{
  showResult.innerText="Fill all the input section properly !!"
}
}

isTriangleBtn.addEventListener('click', checkIsTriangle );