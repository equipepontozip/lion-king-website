'use strict';
// O time é em ms
//

document.addEventListener('DOMContentLoaded', () => {

	window.onload = function() {
		document.getElementById("username").focus();
	};

  let data = {}
	let pass = ""

  let lastKeyDown = {
    key: "",
    time: Date.now()
  };

  let lastKeyUp= {
    key: "",
    time: Date.now()
  };

	document.getElementById('username').onkeypress = function(e) {
		if (!e) e = window.event;
		var keyCode = e.keyCode || e.which;
		if (keyCode == '13'){
			// Enter pressed
			console.log(data)	
			console.log(pass)	
			return true;
		}

	}


  document.addEventListener('keydown', event => {
    let key = event.key.toLowerCase();
    const currentTime = Date.now();
		pass = pass + key

    if(key === '.') {
      key = 'period'
    }

    if(key === 'enter') {
      key = 'return'
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

    
  });


  document.addEventListener('keyup', event => {
    let key = event.key.toLowerCase();
    const currentTime = Date.now();
		pass = pass + key

    if(key === '.') {
      key = 'period'
    }

    if(key === 'enter') {
      key = 'return'
    }

    if(lastKeyDown.key === key) {
      const hold = currentTime - lastKeyDown.time;
      const hName = `H.${key}`;

			data[hName] = hold/1000;

    }

    lastKeyUp.key = key;
    lastKeyUp.time = currentTime;
    
  });

});
