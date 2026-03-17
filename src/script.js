//idea	hasOwnProperty

const wizard = {
	spell: true,
	makeHardAttack() {
		return 8
	},
	makeSoftAttack() {
		return 3
	}
}

const ordinaryPerson = {
	firstName: "Delon",
	makeOrdinaryAttack() {
		return 1
	}
}

ordinaryPerson.__proto__ = wizard

// vypísanie všetkých property, ku ktorým má ordinaryPerson prístup
for (let property in ordinaryPerson) {
	console.log(property)
}
console.log("---------------------------------")

// vypísanie property, ktoré sú priamo na ordinaryPerson
for (let property in ordinaryPerson) {
	if (ordinaryPerson.hasOwnProperty(property)) {
		console.log(property)
	}
}
