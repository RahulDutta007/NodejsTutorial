const events = require('events');
class Innovators extends events {
	constructor(name) {
		super();

		this.name = name;
	}
}

var rahul = new Innovators('rahul');
var arijit = new Innovators('arijit');
var ayan = new Innovators('ayan');
var souvick = new Innovators('souvick');

let sparklers = [rahul, arijit, ayan, souvick];

sparklers.forEach(eachSparkle => {
	eachSparkle.on('created', app =>{
		console.log(eachSparkle.name + ' has created ' + 'app');
	});
});

rahul.emit('created', 'Smart Contracts');
arijit.emit('created', 'CAPS');
ayan.emit('created', 'starmark');
souvick.emit('created', 'NLP');