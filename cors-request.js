var XMLHttpRequest = require('xhr2');
var client = new XMLHttpRequest();

const prompt = require('prompt-sync')();
const url = prompt('>> server url: ');
const http_method = prompt('>> http method: ');

client.open(http_method, url);
client.send();

client.addEventListener("readystatechange", () => {
	if(client.readyState == 4) {
		console.log(client.getAllResponseHeaders());
		console.log(client.responseText);
	}
});
