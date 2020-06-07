var fs = require('fs');
//syncApproach
fs.mkdirSync('myDirSync');

//fs.rmdirSync('myDir');
//asyncApproach
fs.mkdir('myDirASync', function(){
	fs.readFile('count.js', 'utf8', function(err, data){
		fs.writeFile('./myDirSync/writeFile.txt', data, function(){
			if(err) {
				return console.log('Error:' + err);
			}
			console.log("operation completed");
		});
	});
});