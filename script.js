const bandNameEl = document.querySelector('#band-name');
const generateBtn = document.querySelector('#generate-btn');

const firstWords = ['Neon','Miami','Sunset','Galaxy','Plasma','Tropical','Vapor','Chroma','Holo','Rainbow','Cosmo','Cyber','Future','Retro','Cosmic','Electric','Synth','Dream','Night','Moon','Star','Laser','Digital','Virtual','Analog','Space','Time','Sound','Sun','Sky','Aurora','Universe','Stellar','Dreaming','Infinite','Phoenix','Radiant','Luminous','Lumen','Galactic','Nightfall','Sunburst','Aurora','Celestial','Horizon','Magnetic','Meteor','Dawn','Glow','Static','Spark','Echo','Frequency','Fuse','Gravity','Illuminate','Impulse','Kaleidoscope','Melodic','Nebula','Oscillate','Paradox','Reflection','Reverb','Revolution','Sonic','Spectrum','Strobe','Synapse','Thermal','Transcend','Transit','Ultraviolet','Voltage','Warp','Zigzag','Oracular','Specular']

const secondWords = ['Drive','Dreams','Wave','Zone','Empire','Future','City','Horizon','Lights','Fantasy','Machine','Echoes','Nova','Electron','Oasis','Infinity','Paradise','Neon','Sky','Spectrum','Voyage','Beats','Vision','Heart','Soul','Motion','Rain','Skyline','Starlight','Sunset','Thunder','Waves','Euphoria','Memories','Nights','Passion','Retrowave','Synapse','Synthesis','Transmission','Transmitter','Vibes','Vortex','Zenith','Chronicles','Sunshine','Echo','Synth','Chaos','Radiance','Galaxy','Pulse','Fantasy','Velocity','Polaris','Nebula','Eclipse','Comet','Meteor','Aurora','Moon','Laser'];


// Define function to animate text
function animateText(text) {
    let i = 1;
    const intervalId = setInterval(() => {
        bandNameEl.textContent = text.slice(0, i);
        i++;
        if (i > text.length) {
            clearInterval(intervalId);
            generateBtn.disabled = false; // Enable button once animation is complete
        }
    }, 50);
}
  
// Add event listener to generate button
let isAnimating = false;
generateBtn.addEventListener('click', () => {
    if (!isAnimating) {
        isAnimating = true;
        generateBtn.disabled = true; // Disable button while animation is in progress
        // Generate a random band name
        const firstWord = firstWords[Math.floor(Math.random() * firstWords.length)];
        const secondWord = secondWords[Math.floor(Math.random() * secondWords.length)];
        while (secondWord === firstWord) {
            secondWord = secondWords[Math.floor(Math.random() * secondWords.length)];
        }
        const bandName = `${firstWord} ${secondWord}`;

        // Animate the band name one letter at a time
        animateText(bandName);
        isAnimating = false;
    }
});