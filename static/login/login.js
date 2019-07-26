'use strict';
// O time é em ms


document.addEventListener('DOMContentLoaded', () => {

	window.onload = function() {
		document.getElementById("username").focus();
	};


  let data = {}

  function check() {
    const url = "/password/" + data.username;

    window.location.replace(url);

    return false
  }

  document.getElementById('formlogin').onsubmit = check

  document.getElementById('username').onkeypress = function(e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;

    var username = document.getElementById('username').value;

    if (keyCode == '13'){
      data['username'] = username;

			console.log(data)	
			return true;
		}

	}
});
