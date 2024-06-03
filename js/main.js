
const accordians = document.querySelectorAll(".acoording");  //carry all divs with this class name
accordians.forEach(acoording =>{
const icon = acoording.querySelector(".icon");
const answer = acoording.querySelector(".answer");
let isicon= true;
acoording.addEventListener("click", ()=>{
    answer.classList.toggle("active");
    if(isicon){
        icon.src="images/icon-minus.svg";
    }else{
        icon.src="images/icon-plus.svg";
    }
    isicon=!isicon;
})
})
