export { createShip }

function createShip(shipLength) {
	let length = []
	for (let i = 1; i <= shipLength; i++) {
		length.push(0)
	}

	let name
	if (length.length == 2) {
		name = "destroyer"
	}
	if (length.length == 3) {
		name = "cruiser"
	}
	if (length.length == 4) {
		name = "battleship"
	}
	if (length.length == 5) {
		name = "aircraftCarrier"
	}

	function hit(position) {
		this.length[position] = 1
	}

	function isSunk() {
		return length.every((position) => {
			return position
		})
	}

	return {
		length,
		name,
		hit,
		isSunk,
	}
}
