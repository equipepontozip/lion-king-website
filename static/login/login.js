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

    lastKeyDown.key = key;
    lastKeyDown.time = currentTime;

    let ud = 0;
    if(lastKeyUp.time !== 0) {
      ud = currentTime - lastKeyUp.time;
    }

    const ddData = {
      from: lastKeyDown.key,
      to: key,
      time: dd/1000,
      type: 'dd'
    }

    const udData = {
      from: lastKeyUp.key,
      to: key,
      time: ud/1000,
      type: 'ud'
    }

    data.push(ddData, udData)

    console.log([ddData.from, ddData.to, ddData.time, ddData.type])
    console.log([udData.from, udData.to, udData.time, udData.type])
    
  });


  document.addEventListener('keyup', event => {
    const key = event.key;
    const currentTime = Date.now();

    lastKeyUp.key = key;
    lastKeyUp.time = currentTime;
    
  });

});
