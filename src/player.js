export { player }

function player(name, turn) {
	name = name
	turn = turn

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

		if (this.turn === true) {
			this.endTurn(enemyPlayer)
		}
	}

	return {
		name,
		turn,
		endTurn,
		startTurn,
		attack,
	}
}

// export class Player {
// 	constructor(name, turn) {
// 		this.name = name
// 		this.turn = turn
// 	}

// 	endTurn(enemyPlayer) {
// 		this.turn = false
// 		enemyPlayer.startTurn()
// 	}

// 	startTurn() {
// 		this.turn = true
// 	}
// }

// export class Player {
// 	constructor(name, turn) {
// 		this.name = name
// 		this.turn = turn
// 	}
// 	getName() {
// 		return this.name
// 	}
// 	setName(name) {
// 		this.name = name
// 	}
// 	endTurn(player2) {
// 		if (this.turn == true) {
// 			this.turn = false
// 			player2.startTurn()
// 		}
// 	}
// 	startTurn() {
// 		if (this.turn == false) {
// 			this.turn = true
// 		}
// 	}
// 	checkTurn() {
// 		return this.turn
// 	}
// 	attack(x, y, enemyPlayer, enemyBoard) {
// 		if (this.checkTurn()) {
// 			enemyBoard.receiveAttack(x, y)
// 			this.endTurn(enemyPlayer)
// 		}
// 	}
// }
