
const play= document.getElementById("play");
const icon = document.getElementById("icon");
const disc=document.getElementById("jerry")

const audio = new Audio("./12.Lucenzo- Danza Kuduro.mp3"); 
let isPlaying=false;    

alert("Warning : GET READY TO DANCE !!!!");


play.addEventListener("click" ,()=>{
    if (!isPlaying){
        icon.src="./pause_button.svg";
        disc.classList.add("disc");
        audio.play(); 
        isPlaying = true ; 
    }else{
        icon.src = "./play_button.svg";
        disc.classList.remove("disc");
        audio.pause();
        isPlaying=false ; 
    }
})



