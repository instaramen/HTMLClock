
var getTime = function() {
	document.getElementById('clock').innerHTML = new Date().toLocaleTimeString();
	setTimeout(getTime, 1000);
}

setTimeout(getTime, 1000);

