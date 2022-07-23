document.body.addEventListener('keyup',(event)=>{
    playSound(event.code.toLocaleLowerCase());
})
document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;

    if(song !== ''){
        let SongArray = song.split('');
        playComposition(SongArray);
    }
   
    
})
function playSound(sound){
    let audio = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    if(audio){
        audio.currentTime = 0;
        audio.play();
    }
    if(keyElement){
        keyElement.classList.add("active");
        setTimeout(()=>{
            keyElement.classList.remove("active");
        },250)
    }
    
}
function playComposition(SongArray){
    wait = 0;
    for(let songItem of SongArray){
       
        setTimeout(()=>{
            playSound(`key${songItem}`)
        },wait)
        wait += 250;
    }
}

