export { player, cpu }

function player(name, turn) {
	name = name
	turn = turn

	// this is an array of areas which can still RECEIVE an attack
	// enemy CPUs use this to select a coordinate at random
	// ensures that no spot is attacked twice as each coord is removed after used
	let attackableSpots = []
	for (let y = 0; y <= 9; y++) {
		for (let x = 0; x <= 9; x++) {
			let pair = [y, x]
			attackableSpots.push(pair)
		}
	}

	function endTurn(enemyPlayer) {
		if (this.turn === true) {
			this.turn = false
			if (enemyPlayer) enemyPlayer.startTurn()
		}
	}

	function startTurn() {
		if (this.turn === false) {
			this.turn = true
		}
	}

	function checkIfAttackValid(enemyBoard, y, x) {
		if (enemyBoard.hiddenBoard[y][x]) {
			return false
		} else {
			return true
		}
	}

	function attack(enemyPlayer, enemyBoard, y, x) {
		// if a spot has already been hit, then it will be defined on hiddenBoard
		// so the rest will only work if the spot has not already been hit

		if (!checkIfAttackValid(enemyBoard, y, x)) {
			return
		}
		enemyBoard.receiveAttack(y, x)
		let attackedIndex = findCoordsIndex(enemyPlayer.attackableSpots, y, x)
		enemyPlayer.attackableSpots.splice(attackedIndex, 1)

		if (this.turn === true) {
			this.endTurn(enemyPlayer)
		}
	}

	// returns index of given coordinates within given attackableSpots
	function findCoordsIndex(array, y, x) {
		for (let i = 0; i < array.length; i++) {
			if (array[i][0] === y && array[i][1] === x) {
				return i
			}
		}
	}

	return {
		name,
		turn,
		attackableSpots,
		endTurn,
		startTurn,
		checkIfAttackValid,
		attack,
	}
}

function cpu(name, turn) {
	let prototype = player(name, turn)

	function randomAttack(enemyPlayer, enemyBoard) {
		// if (this.turn !== true) {
		// 	return
		// }

		let attackedIndex = getRandomInt(0, enemyPlayer.attackableSpots.length)
		let attackedCoords = enemyPlayer.attackableSpots[attackedIndex]

		enemyBoard.receiveAttack(attackedCoords[0], attackedCoords[1])

		enemyPlayer.attackableSpots.splice(attackedIndex, 1)

		this.endTurn(enemyPlayer)
	}

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min) + min)
	}

	function placeRandom(board) {
		if (!board) {
			return
		}

		while (board.ships.length < 5) {
			let yCoord = getRandomInt(0, 10)
			let xCoord = getRandomInt(0, 10)
			let direction = getRandomInt(0, 2)

			if (direction === 0) {
				direction = "h"
			} else {
				direction = "v"
			}

			board.placeShip(yCoord, xCoord, direction)
		}

		// while (board.ships.length < 5) {
		// 	board.placeShip(yCoord, xCoord, direction)
		// }
	}

	return Object.assign({}, prototype, { randomAttack, placeRandom })
}
