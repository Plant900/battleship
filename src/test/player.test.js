import { player, cpu } from "../player.js"
import { createGameboard } from "../createGameboard"

describe("player", () => {
	let newPlayer1
	let newPlayer2

	beforeAll(() => {
		newPlayer1 = player("tate", true)
		newPlayer2 = player("enemy", true)
	})

	test("player should have a name", () => {
		expect(newPlayer1.name).toBe("tate")
	})

	test("end turn should set turn status to false", () => {
		newPlayer1.endTurn()
		expect(newPlayer1.turn).toBe(false)
	})

	test("start turn should set turn status to true", () => {
		newPlayer1.startTurn()
		expect(newPlayer1.turn).toBe(true)
	})

	test("end turn should start enemy turn", () => {
		newPlayer1.endTurn(newPlayer2)
		expect(newPlayer1.turn).toBe(false)
		expect(newPlayer2.turn).toBe(true)

		newPlayer2.endTurn(newPlayer1)
		expect(newPlayer2.turn).toBe(false)
		expect(newPlayer1.turn).toBe(true)
	})

	test("attack should end turn and start other players turn", () => {
		let tate = player("tate", true)
		let enemy = player("enemy", false)
		let tateBoard = createGameboard()
		let enemyBoard = createGameboard()

		tate.attack(enemy, enemyBoard, 0, 0)

		expect(tate.turn).toBe(false)
		expect(enemy.turn).toBe(true)
	})

	test("attack should correctly send coordinates to gameboard to evaluate attack", () => {
		let tate = player("tate", true)
		let enemy = player("enemy", false)
		let tateBoard = createGameboard()
		let enemyBoard = createGameboard()

		enemyBoard.placeShip(0, 0, "h", 3)
		tate.attack(enemy, enemyBoard, 0, 0)

		expect(enemyBoard.ships[0].length[0]).toBe(1)
	})

	test("attacking should remove those coords from attackableSpots", () => {
		let tate = player("tate", true)
		let enemy = player("enemy", false)
		let tateBoard = createGameboard()
		let enemyBoard = createGameboard()

		enemyBoard.placeShip(0, 0, "h", 3)
		tate.attack(enemy, enemyBoard, 0, 0)

		let attackedSpot = enemy.attackableSpots.find((coord) => {
			return coord[0] === 0 && coord[1] === 0
		})

		// coords 0,0 should be gone from the array of attackable spots
		expect(attackedSpot).toBe(undefined)
	})

	test("randomAttack should pick random coordinates from attackableSpots and make attack", () => {
		let tate = player("tate", true)
		let enemy = cpu("enemy", false)
		let tateBoard = createGameboard()
		let enemyBoard = createGameboard()

		tate.endTurn(enemy)
		enemy.randomAttack(tate, tateBoard)

		let damagedRow = tateBoard.board.find((row) => {
			return row.includes("miss")
		})

		expect(damagedRow).not.toBe(undefined)
	})

	test("placeRandom should place each of the 5 ships in a random spot", () => {
		let enemy = cpu("enemy", true)
		let enemyBoard = createGameboard()

		while (enemyBoard.ships.length < 5) {
			enemy.placeRandom(enemyBoard)
		}

		expect(enemyBoard.ships.length).toBe(5)
	})
})
