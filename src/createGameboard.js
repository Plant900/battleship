export { createGameboard }
import { createShip } from "./createShip.js"

function createGameboard() {
	// this board displays all ships currently on the board
	let board = Array.apply(null, new Array(10)).map(function () {
		return [...Array(10)]
	})

	// this board only displays hits/misses for purposes of rendering
	let hiddenBoard = Array.apply(null, new Array(10)).map(function () {
		return [...Array(10)]
	})

	let ships = []

	function placeShip(y, x, length, direction) {
		let newShip = createShip(length)
		ships.push(newShip)

		//the name of the ship is put on each coordinate where it is located
		//as well as a number indicating which 'spot' on the ship it is
		for (let i = 0; i < length; i++) {
			if (direction == "h") {
				board[y][x + i] = [newShip.name, i]
			} else if (direction == "v") {
				board[y + i][x] = [newShip.name, i]
			}
		}
	}

	function receiveAttack(y, x) {
		let attack = board[y][x]
		if (attack === undefined) {
			board[y][x] = "miss"
			hiddenBoard[y][x] = "miss"
		} else {
			// since attack did hit a ship, find the ship in the ships array with the matching name
			let target = ships.find((ship) => {
				return ship.name == attack[0]
			})

			target.hit(attack[1])
			hiddenBoard[y][x] = "hit"
		}
	}

	function allSunk() {
		return ships.every((ship) => {
			return ship.isSunk()
		})
	}

	return {
		board,
		hiddenBoard,
		ships,
		placeShip,
		receiveAttack,
		allSunk,
	}
}
