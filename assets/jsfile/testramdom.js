const btnSt = document.querySelector(".button-tow");
const infPrize = document.querySelector(".lable-give");

function dispy(){
   const  valueas = document.querySelector(".form-control").value;
   
   if(valueas=== "option"){
      btnSt.classList.add('disabled');
   }
   else {
      btnSt.classList.remove('disabled');
   }
   
}






