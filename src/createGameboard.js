export { createGameboard }
import { createShip } from "./createShip.js"

function createGameboard() {
	let board = Array.apply(null, new Array(10)).map(function () {
		return new Array(10)
	})

	let ships = []

	function placeShip(x, y, length, direction) {
		let newShip = createShip(length)
		ships.push(newShip)

		//the name of the ship is put on each coordinate where it is located
		//as well as a number indicating which 'spot' on the ship it is
		for (let i = 0; i < length; i++) {
			if (direction == "h") {
				board[x][y + i] = [newShip.name, i]
			} else if (direction == "v") {
				board[x + i][y] = [newShip.name, i]
			}
		}
	}

	function receiveAttack(x, y) {
		let attack = board[x][y]
		if (attack === undefined) {
			attack = "miss"
		} else {
			// since attack did hit a ship, find the ship in the ships array with the matching name
			let target = ships.find((ship) => {
				return ship.name == attack[0]
			})

			target.hit(attack[1])
		}
	}

	function allSunk() {
		return ships.every((ship) => {
			return ship.isSunk()
		})
	}

	return {
		board,
		ships,
		placeShip,
		receiveAttack,
		allSunk,
	}
}
