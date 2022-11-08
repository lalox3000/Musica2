let musiquita= new Audio("To_You.mp3");
document.getElementById("playBtn").addEventListener('click',()=>{
    musiquita.play();
    console.log("play")
    });
    document.getElementById("pauseBtn").addEventListener('click',()=>{
    musiquita.pause();
    }) 
