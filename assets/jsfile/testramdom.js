const btnStt = document.querySelector(".button-tow");
const mp3Audio= document.getElementById("playAudio");

function dispy(){
   const  valueas = document.querySelector(".form-control").value;
   
   if(valueas=== "option"){
      btnStt.classList.add('disabled');
   }
   else {
      btnStt.classList.remove('disabled');
      setTimeout(function(){
         mp3Audio.innerHTML= `<source src="./assets/audio_file/nhaccc.mp3">`
      mp3Audio.load();
      mp3Audio.play();
   },25000)
      
   }
}
function display2(){
   setTimeout(function(){
      mp3Audio.innerHTML= `<source src="./assets/audio_file/nhaccc.mp3">`
      mp3Audio.load();
      mp3Audio.play();
   },25000)
}