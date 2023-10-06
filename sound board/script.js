const sounds = ['vine-boom',
                'bruh-sound',
                'ding',
                'discord',
                'ta-da',
                'wrong'
             ];

sounds.forEach(sound => {
    const btn =document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSong();
        btn.classList.add('active');
        setTimeout(()=>{
            btn.classList.remove('active')
        }, 500);


        document.getElementById(sound).play()

    })

    document.getElementById('buttons').appendChild(btn);

})

function stopSong() {
    sounds.forEach(sound => {
        
        const song = document.getElementById(sound)
        
        song.pause()
        song.currentTime = 0;
    })
}