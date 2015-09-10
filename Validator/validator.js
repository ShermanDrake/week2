var phoneNumber = prompt("please enter your phone number and include the dashes.")
if (phoneNumber [3] === '-' && phoneNumber[7] ==='-') {
		alert('your phone number is valid')
}
else {
	alert("your phone number isn't valid")
}

var birthDate = prompt("please enter your birthdate in this format xx/xx/xxxx.")
if (birthDate [2] === '/' && birthDate[5] ==='/') {
		alert("your Birthday entry is valid.")
}
else {
	alert("your Birthday isn't valid")
}

var postalCode = prompt("please enter your Postal Code either xxxxx. or xxxxx-xxxx.")
if (postalCode.length === 5 || (postalCode.length === 10 && postalCode[5] === '-') ) {
		alert("your postal code is valid")
}
else {
	alert("your postal code isn't valid")
}

var stateAbbreviation = prompt("enter your State in 2 characters.")
if (stateAbbreviation === stateAbbreviation.toUpperCase() && stateAbbreviation.length === 2) {

		alert("your State is valid")
}
else {
	alert("your state is not valid")
}

var maritalStatus = prompt("are you married? enter 'yes' or 'no'.")
if (maritalStatus === 'yes' || maritalStatus === 'no') {

		alert("thank you")
}









console.log('You entered: ' + phoneNumber )
console.log('you entered: ' + birthDate )
console.log('you entered: ' + postalCode )
console.log('you entered: ' + stateAbbreviation )
console.log('you entered: ' + maritalStatus)

// var phoneNumber = prompt("Please enter your phone number"());
// var food = prompt("What's for lunch?");

// var	myString = name  + food


// console.log( 'You entered: ' + phoneNumber + ', ' + food )
// console.log( 'There are ' + myString.length + ' characters in the string.')
// console.log( 'The third character is ' + myString.charAt(3) )
// console.log( 'There are ' + myString.length + ' characters in the string.')
// console.log( 'Lowercase: ' + myString.toLowerCase())
// console.log( 'Lowercase: ' + myString.toUpperCase())
// console.log( 'Sentance: ' + phoneNumber + ', had ' + food + ' or lunch.')
// console.log( 'Subword: ' + myString.charAt(2, 3, 4) )