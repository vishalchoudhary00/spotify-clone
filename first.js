console.log("welcome to spotify");
//initiaze the variables
let songIndex=0;
let audioElement= new Audio('jaat1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songs=[
    {songName:"jaat1.mp3",filePath:"song/jaat1.mp3",coverPath:"cover/Jaat.jpg"},
    {songName:"Pistol.mp3",filePath:"song/Pistol.mp3",coverPath:"cover/pistol.jpg"},
    {songName:"Chambal k Daaku.mp3",filePath:"song/Chambal k Daaku.mp3",coverPath:"cover/masom1.jpg"},
    {songName:"jaat1.mp3",filePath:"song/jaat4.mp3",coverPath:"cover/masom2.jpeg"},
    {songName:"jaat2.mp3",filePath:"song/jaat5.mp3",coverPath:"cover/Jaat11.jpg"},
]
//audioElement.play();
//play pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }else{
      audioElement.pause();
      masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
//listen to event
audioElement.addEventListener('timeupdate',()=>{
//update seekbar
 progress=parseInt((audioElement.currentTime / audioElement.duration)*100);
myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
audioElement.currentTime=((myProgressBar.value*audioElement.duration)/100);
})

