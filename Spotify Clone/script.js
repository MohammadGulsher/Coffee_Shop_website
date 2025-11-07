// Initialize the Variables..
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterplay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');

let songs=[
    {songName :"Salame-e-Ishq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName :"Salame-e-Ishq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"}, 
    {songName :"Salame-e-Ishq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName :"Salame-e-Ishq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName :"Salame-e-Ishq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName :"Salame-e-Ishq",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
]

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    }else{
        audioElement.pause();
        masterplay.classList.remove('fa-pasue-circle');
        masterplay.classList.add('fa-paly-circle');
    }
})
//Listen to Events...
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update Seekbar
})