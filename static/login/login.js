'use strict';
// O time é em ms

document.addEventListener('DOMContentLoaded', () => {

  let data = []

  let lastKeyDown = {
    key: "",
    time: Date.now()
  };

  let lastKeyUp= {
    key: "",
    time: Date.now()
  };


  document.addEventListener('keydown', event => {
    const key = event.key;
    const currentTime = Date.now();

    const dd = currentTime - lastKeyDown.time;

    let ud = 0;
    if(lastKeyUp.time !== 0) {
      ud = currentTime - lastKeyUp.time;
    }

    const ddData = {
      "from": lastKeyDown.key,
      "to": key,
      "time": dd/1000,
      "type": 'dd'
    }

    const udData = {
      "from": lastKeyUp.key,
      "to": key,
      "time": ud/1000,
      "type": 'ud'
    }

    if(lastKeyDown.key !== "") {
      data.push(ddData)
    }

    if(lastKeyUp.key !== "") {
      data.push(udData)
    }

    lastKeyDown.key = key;
    lastKeyDown.time = currentTime;

    console.log(data)
    
  });


  document.addEventListener('keyup', event => {
    const key = event.key;
    const currentTime = Date.now();

    if(lastKeyDown.key === key) {
      const hold = currentTime - lastKeyDown.time
      const dt = {
        "key": key,
        "time": hold/1000,
        "type": "h"
      }

      data.push(dt)

    }

    lastKeyUp.key = key;
    lastKeyUp.time = currentTime;
    
  });

});
