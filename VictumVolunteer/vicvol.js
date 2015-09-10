var numberOfVictims = +prompt('enter the number of victums', '1')

var victims = [], volunteers = []


for(var i = 0; i < numberOfVictims; i++) {
		var array = []
		array.push(prompt('enter their name'))
		array.push(prompt('enter their phone number'))
		array.push(prompt('enter their street'))

		victims.push(array)

}

var numberOfVolunteers = prompt('enter the number of volunteers', '1')

for (var i = 0; i < numberOfVolunteers; i++) {
		var array = []
		array.push(prompt('enter their name'))
		array.push(prompt('enter their phone number'))
		array.push(prompt('enter their street'))

		volunteers.push(array)

}

var victimsByName = function() {
	var names = ""
	if (victims.length > 0) {
			for (var i = 0; i < victims.length; i++) {
					names = victims[i] [0] + ''
			};
	}
	return names
}

var volunteersByName = function() {

	var names = ""
	if ( volunteers.length > 0 ) {
			for (var i = 0; i < victims.length; i++) {
					names = victims [i] [0] + ''

			};

	}
	return names
}

alert("There are " + numberOfVictims + "person(s) in need: " + victimsByName() + ".\ There are: " + numberOfVolunteers + ' volunteers: ' + volunteersByName())





