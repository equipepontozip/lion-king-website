'use strict';
// O time é em ms

document.addEventListener('DOMContentLoaded', () => {

  let buffer = []
  let lastKeyTimeDown = Date.now()
  let lastKeyTimeUp = Date.now()
  let lastKeyTimePress = Date.now()

  document.addEventListener('keydown', event => {
    const key = event.key;
    const currentTime = Date.now();

    const timeDiff = currentTime - lastKeyTimeDown;
    lastKeyTimeDown = currentTime;

    console.log("KeyDown: " + [key, timeDiff])
    
  });


  document.addEventListener('keyup', event => {
    const key = event.key;
    const currentTime = Date.now();

    const timeDiff = currentTime - lastKeyTimeUp;
    lastKeyTimeUp = currentTime;

    console.log("KeyUp: " + [key, timeDiff])
    
  });

});
