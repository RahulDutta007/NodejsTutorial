var time = 0;

var intervalID = setInterval(async function(){
	time += 2;
	console.log(time + ' seconds have passed');
	if(time > 5) {
		clearInterval(intervalID);
	}
}, 2000);