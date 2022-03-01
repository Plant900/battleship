export { player, cpu }

function player(name, turn) {
	name = name
	turn = turn

	// this is an array of areas which can still RECEIVE an attack
	// enemy CPUs use this to select a coordinate at random
	// ensures that no spot is attacked twice as each coord is removed after used
	let attackArray = []
	for (let x = 0; x <= 9; x++) {
		for (let y = 0; y <= 9; y++) {
			let pair = [x, y]
			attackArray.push(pair)
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

	function attack(enemyPlayer, enemyBoard, x, y) {
		enemyBoard.receiveAttack(0, 0)
		let attackedIndex = findCoordsIndex(enemyPlayer.attackArray, x, y)
		enemyPlayer.attackArray.splice(attackedIndex, 1)

		if (this.turn === true) {
			this.endTurn(enemyPlayer)
		}
	}

	// returns index of given coordinates within given attackArray
	function findCoordsIndex(array, x, y) {
		for (let i = 0; i < array.length; i++) {
			if (array[i][0] === x && array[i][1] === y) {
				return i
			}
		}
	}

	return {
		name,
		turn,
		attackArray,
		endTurn,
		startTurn,
		attack,
	}
}

function cpu(name, turn) {
	let prototype = player(name, turn)

	function randomAttack(enemyPlayer, enemyBoard) {
		let attackedIndex = getRandomInt(0, enemyPlayer.attackArray.length)
		let attackedCoords = enemyPlayer.attackArray[attackedIndex]

		enemyBoard.receiveAttack(attackedCoords[0], attackedCoords[1])

		enemyPlayer.attackArray.splice(attackedIndex, 1)
		console.log(enemyPlayer.attackArray)

		if (this.turn === true) {
			this.endTurn(enemyPlayer)
		}
	}

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min) + min)
	}

	return Object.assign({}, prototype, { randomAttack })
}
