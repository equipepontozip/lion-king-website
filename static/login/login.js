'use strict';
// O time é em ms
//
Object.prototype.isEmpty = function() {
    for(var key in this) {
        if(this.hasOwnProperty(key))
            return false;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', () => {

  let data = {}

  let lastKeyDown = {
    key: "",
    time: Date.now()
  };

  let lastKeyUp= {
    key: "",
    time: Date.now()
  };


  document.addEventListener('keydown', event => {
    let key = event.key.toLowerCase();
    const currentTime = Date.now();

    if(key === '.') {
      key = 'period'
    }

    const dd = currentTime - lastKeyDown.time;

    let ud = currentTime - lastKeyUp.time;

    const ddName = `DD.${lastKeyDown.key}.${key}`;
    const udName = `UD.${lastKeyUp.key}.${key}`;


    if(lastKeyDown.key !== "") {
      data[ddName] = dd/1000 
    }

    if(lastKeyUp.key !== "") {
      data[udName] = ud/1000 
    }

    lastKeyDown.key = key;
    lastKeyDown.time = currentTime;

    console.log(data)
    
  });


  document.addEventListener('keyup', event => {
    let key = event.key.toLowerCase();
    const currentTime = Date.now();

    if(key === '.') {
      key = 'period'
    }

    if(lastKeyDown.key === key) {
      const hold = currentTime - lastKeyDown.time;
      const hName = `H.${key}`;

      data[hName] = hold;

    }

    lastKeyUp.key = key;
    lastKeyUp.time = currentTime;
    
  });

});
