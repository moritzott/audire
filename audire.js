let audioContext = new AudioContext();

function audireError() {
    
    // create Tones with Oscillators
    const toneOne = audioContext.createOscillator();
    const toneTwo = audioContext.createOscillator();
    const toneThree = audioContext.createOscillator();
    console.log(toneOne);

    // create gain node:
    const gain = audioContext.createGain();

    // connect gain with speakers:
    gain.connect(audioContext.destination);

    // connect oscillators with gain node:
    toneOne.connect(gain);
    toneTwo.connect(gain);
    toneThree.connect(gain);

    // set gain settings:
    gain.gain.value = 0.1;


    // modify wave of oscillators:
    toneOne.type = 'sine';
    toneTwo.type = 'sine';
    toneThree.type = 'sine';
    
    // set frequencies of tones:
    toneOne.frequency.value = 440;
    toneTwo.frequency.value = 400;
    toneThree.frequency.value = 360;

    // start the tones:
    toneOne.start(audioContext.currentTime);
    toneTwo.start(audioContext.currentTime);
    toneThree.start(audioContext.currentTime);

    // stop them after short time
    toneOne.stop(audioContext.currentTime + 0.08);
    toneTwo.stop(audioContext.currentTime + 0.08);
    toneThree.stop(audioContext.currentTime + 0.08);
    console.log('Tone finished');
}

function audireDisabled() {
    
}

function audireNext() {
    
}

function audireConfirm() {
    
}

function audireSubmit() {
    
}

function audireStart() {
    
}

function audireStop() {
    
}


function addHandlers() {
    /* const errors = document.getElementsByClassName('audireError');
    for (let index = 0; index < errors.length; index++) {
        const element = errors[index];
        element.addEventListener('click', audireError);
        
    } */
    document.getElementById('errorButton').addEventListener('click', audireError);
    
    
    /* document.getElementsByClassName('audireDisabled').addEventListener('click', audireDisabled);
    document.getElementsByClassName('audireConfirm').addEventListener('click', audireConfirm);
    document.getElementsByClassName('audireNext').addEventListener('click', audireNext);
    document.getElementsByClassName('audireStop').addEventListener('click', audireStop); */
    
}


// maybe add function through classes?
window.addEventListener('load', addHandlers);