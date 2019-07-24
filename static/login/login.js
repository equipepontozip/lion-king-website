'use strict';
// O time é em ms

document.addEventListener('DOMContentLoaded', () => {

  let buffer = []
  let lastKeyTimeDown = Date.now()
  let lastKeyTimeUp = Date.now();

  document.addEventListener('keydown', event => {
    const key = event.key;
    const currentTime = Date.now();

    const dd = currentTime - lastKeyTimeDown;
    lastKeyTimeDown = currentTime;

    let ud = 0;
    if(lastKeyTimeUp !== 0) {
      ud = currentTime - lastKeyTimeUp;
    }

    console.log("DD: " + [key, dd])
    console.log("UD: " + [key, ud])
    
  });


  document.addEventListener('keyup', event => {
    const key = event.key;
    const currentTime = Date.now();

    lastKeyTimeUp = currentTime;
    
  });

});
