import { createGameboard } from "../createGameboard.js"

describe("createGameboard", () => {
	let gameboard

	beforeEach(() => {
		gameboard = createGameboard()
		gameboard.placeShip(0, 0, 3, "h")
		gameboard.receiveAttack(0, 0)
		gameboard.receiveAttack(0, 1)
		gameboard.receiveAttack(0, 2)
		gameboard.receiveAttack(3, 0)
	})

	test("should return object", () => {
		expect(typeof gameboard).toBe("object")
	})

	test("placeShip should accurately place starting point of ship on board", () => {
		expect(gameboard.board[0][0]).toEqual(["cruiser", 0])
	})

	test("placeShip should mark the correct spots on the board with created ship", () => {
		expect(gameboard.board[0][1]).toEqual(["cruiser", 1])
		expect(gameboard.board[0][2]).toEqual(["cruiser", 2])
		expect(gameboard.board[0][3]).toBe(undefined)
	})

	test("receiveAttack should mark ship as hit, or mark board as miss", () => {
		//within the ship objects, 0 on its length array means intact
		//1 means it has been hit
		expect(gameboard.ships[0].length[2]).toBe(1)
		expect(gameboard.ships[0].length[3]).toBe(undefined)
	})

	test("allSunk should return true if all ships on board are sunk", () => {
		expect(gameboard.allSunk()).toBe(true)
	})

	test("receiveAttack should update hiddenBoard", () => {
		expect(gameboard.hiddenBoard[0][0]).toBe("hit")
		expect(gameboard.hiddenBoard[3][0]).toBe("miss")
	})

	test("receiveAttack should only receive if attack has not been made", () => {})
})
