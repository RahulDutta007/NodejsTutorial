//var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/readStream.txt', 'utf8');

readStream.on('data', function(chunk){
	console.log('new chunck received:');
	console.log(chunk);
});
