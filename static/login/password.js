'use strict';
// O time é em ms
//
//


document.addEventListener('DOMContentLoaded', () => {

	window.onload = function() {
		document.getElementById("password").focus();
	};


  let data = {}

  function keystroke(usr) {

    const url = "/keystroke/";
    let res;
    const other_params = {
      headers : { 
        "Content-Type": "application/json"
      },
      body : JSON.stringify(data),
      method : "POST",
    };

    fetch(url, other_params)
      .then(async response => {
        res = await response.json()

        console.log(res.classification)
        console.log(usr)
        if(res.classification === usr){
          const url = '/after_login'
          window.location.replace(url)
        }
        else {
          const face = '/facial'
          window.location.replace(face)
        }
      })
      .catch(error => {
        console.log('Error', error)
        res = false;

      })

    return res;
  }


  function check() {
    const password = document.getElementById('password').value

    const url = "/validate/";
    const other_params = {
      headers : { 
        "Content-Type": "application/json"
      },
      body : JSON.stringify({"password": password}),
      method : "POST",
    };



    fetch(url, other_params)
      .then(async response => {

        const val = await response.json()
        if(val['valide'] == 'true') {
          let pathname = window.location.pathname;
          let usr = pathname.split("/password/")[1]

          await keystroke(usr)

        }
        else {
          alert("Senha incorreta")
          let pathname = window.location.pathname;
          window.location.replace(pathname)

        }

      })
      .catch(error => console.log('Error', error))

    return false;

  }

  document.getElementById('formlogin').onsubmit = check


  let lastKeyDown = {
    key: "",
    time: Date.now()
  };

  let lastKeyUp= {
    key: "",
    time: Date.now()
  };

  document.getElementById('password').onkeypress = function(e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;

    var password = document.getElementById('password').value;

    if (keyCode == '13'){
			// Enter pressed
			return true;
		}

	}


  document.addEventListener('keydown', event => {
    let key = event.key.toLowerCase();
    const currentTime = Date.now();

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
