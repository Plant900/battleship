import { player, cpu } from "./player.js"
import { createGameboard } from "./createGameboard.js"
import { createShip } from "./createShip.js"
import "./styles.css"

function cacheDom() {
	let player1Dom = document.querySelector("#board1")
	let player2Dom = document.querySelector("#board2")
	let cells = Array.from(document.querySelectorAll(".cell"))
	let cpuCells = Array.from(document.querySelectorAll(".cpuCell"))

	return {
		gameContainer,
		player1Dom,
		player2Dom,
		cells,
		cpuCells,
	}
}
let dom = cacheDom()

let player1 = player("player1", false)
let player1Board = createGameboard()
player1Board.placeShip(0, 0, 3, "h")
player1Board.placeShip(1, 0, 5, "h")

let cpu1 = cpu("cpu", false)
let cpu1Board = createGameboard()
cpu1Board.placeShip(0, 0, 3, "h")
cpu1Board.placeShip(1, 0, 5, "h")

function renderStart() {
	dom.player1Dom.style.display = "flex"
}
renderStart()

// iterates through gameboards, rendering based on each cell
// cpu board is the hiddenBoard, whereas player can see ships on their own board
// gives each dom cell the corresponding coordinates
function renderBoards() {
	dom.player1Dom.style.display = "flex"
	dom.player2Dom.style.display = "flex"
	dom.player1Dom.innerHTML = ""
	dom.player2Dom.innerHTML = ""

	player1Board.board.forEach((row, yIndex) => {
		row.forEach((cell, xIndex) => {
			let domCell = document.createElement("div")

			// if coord has an array, there is a ship there
			if (Array.isArray(cell)) {
				domCell.classList.add("shipCell")

				if (cell.includes("hit")) {
					domCell.classList.add("hitShipCell")
				}
			}

			domCell.classList.add("cell")
			domCell.dataset.coords = [yIndex, xIndex]
			domCell.innerHTML = determineCellDisplay(cell)
			dom.player1Dom.appendChild(domCell)
		})
	})
	cpu1Board.hiddenBoard.forEach((row, yIndex) => {
		row.forEach((cell, xIndex) => {
			let domCell = document.createElement("div")

			if (cell === "hit") {
				domCell.classList.add("hitShipCell")
			}

			domCell.classList.add("cell")
			domCell.classList.add("cpuCell")
			domCell.dataset.coords = [yIndex, xIndex]
			domCell.innerHTML = determineCellDisplay(cell)
			dom.player2Dom.appendChild(domCell)
		})
	})

	dom = cacheDom()
	dom.cpuCells.forEach((cell) => {
		cell.addEventListener("click", clickEvent, { once: true })
	})
}

// used when rendering gameboards
function determineCellDisplay(cell) {
	if (cell === undefined) {
		return "&nbsp"
	}
	if (cell === "miss") {
		return "x"
	}

	return ""
}

// event applied to each cell on render
function clickEvent(e) {
	// turn dataset coords back into array
	let coords = e.target.dataset.coords
	coords = coords.split(",").map((item) => {
		return parseInt(item, 10)
	})

	player1.attack(cpu1, cpu1Board, coords[0], coords[1])
	cpu1.randomAttack(player1, player1Board)

	renderBoards()

	if (cpu1Board.allSunk()) {
		winEvent(player1)
	} else if (player1Board.allSunk()) {
		winEvent(cpu1)
	}
}

function winEvent(player) {
	alert(`${player.name} wins!`)
}

// let players place ships
// display player names
// let player change name
// start game/end game events
