const btnStt = document.querySelector(".button-tow");
const mp3Audio= document.getElementById("playAudio");

window.onload =  function(){
   mp3Audio.load();
   mp3Audio.play();
}

function dispy(){
   const  valueas = document.querySelector(".form-control").value;
   
   if(valueas=== "option"){
      btnStt.classList.add('disabled');
   }
   else {
      btnStt.classList.remove('disabled');
      mp3Audio.innerHTML= `<source src="./assets/audio_file/nhaccc.mp3">`
      mp3Audio.load();
      mp3Audio.play();
   }
}
function display2(){
  
      mp3Audio.innerHTML= `<source src="./assets/audio_file/nhaccc.mp3">`
      mp3Audio.load();
      mp3Audio.play();
   
}
function doubleClickk(){
   mp3Audio.innerHTML= `<source src="./assets/audio_file/nhac.mp3">`;
   mp3Audio.load();
   mp3Audio.play();
}