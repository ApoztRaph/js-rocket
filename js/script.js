var doCoolStuff = function() {
	currentClassName = document.getElementById('cool').className;

	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red';
	}
	else {
		document.getElementById('cool').className = 'cool';
	}
}

var car = {
	make: 'toyota',
	type: 'yaris',
	color: 'blue',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: [
		's1',
		's2', 
		's3', 
		's4'
	],
	turnOn: function () {
		this.isTurnedOn = true;
	},
	fly: function () {
		alert('fly');
	},
	switchCar: function (isOn) {
		console.log('Turn car ' + isOn);
		if (isOn == true) {
			this.isTurnedOn = true;
		}
		else {
			this.isTurnedOn = false;
		}
	}
};

		console.log('Hello World !');