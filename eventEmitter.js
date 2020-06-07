var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('fooEvent', function(msg){
	console.log(msg);
});

eventEmitter.emit('fooEvent', 'Holla! fooEvent has been emitted');