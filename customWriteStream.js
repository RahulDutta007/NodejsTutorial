//var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/readStream.txt', 'utf8');
var writeStream = fs.createWriteStream(__dirname + '/writeStream.txt')

readStream.on('data', function(chunk){
	console.log('new chunck received:');
	writeStream.write(chunk);
});
