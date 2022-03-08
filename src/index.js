import { player, cpu } from "./player.js"
import { createGameboard } from "./createGameboard.js"
import { createShip } from "./createShip.js"
import "./styles.css"

function cacheDom() {
	let board1Message = document.querySelector("#board1Message")
	let directionBtn = document.querySelector("#directionBtn")
	let player1Dom = document.querySelector("#board1")
	let player2Dom = document.querySelector("#board2")
	let cells = Array.from(document.querySelectorAll(".cell"))
	let cpuCells = Array.from(document.querySelectorAll(".cpuCell"))

	return {
		board1Message,
		directionBtn,
		player1Dom,
		player2Dom,
		cells,
		cpuCells,
	}
}
let dom = cacheDom()

let player1 = player("player1", false)
let player1Board = createGameboard()

let cpu1 = cpu("cpu", false)
let cpu1Board = createGameboard()
cpu1Board.placeShip(0, 0, "h", 3)
cpu1Board.placeShip(1, 0, "h", 5)

function renderStart() {
	dom.player1Dom.style.display = "flex"
	dom.player1Dom.innerHTML = ""

	player1Board.board.forEach((row, yIndex) => {
		row.forEach((cell, xIndex) => {
			let domCell = document.createElement("div")

			// if coord has an array, there is a ship there
			if (Array.isArray(cell)) {
				domCell.classList.add("shipCell")
			}

			domCell.classList.add("cell")
			domCell.dataset.coords = [yIndex, xIndex]
			domCell.innerHTML = determineCellDisplay(cell)
			dom.player1Dom.appendChild(domCell)
		})
	})

	dom = cacheDom()
	dom.cells.forEach((cell) => {
		cell.addEventListener("mouseover", hoverEventStart)
	})
	dom.cells.forEach((cell) => {
		cell.addEventListener("click", clickEventStart)
	})

	dom.board1Message.textContent = getMessageStart()

	checkIfReady()
}
renderStart()

dom.directionBtn.addEventListener("click", (e) => {
	if (e.target.dataset.direction === "h") {
		e.target.dataset.direction = "v"
		return
	} else if (e.target.dataset.direction === "v") {
		e.target.dataset.direction = "h"
		return
	}
})

function clickEventStart(e) {
	let coords = e.target.dataset.coords.split(",").map((item) => {
		return parseInt(item, 10)
	})

	let direction = dom.directionBtn.dataset.direction
	player1Board.placeShip(coords[0], coords[1], direction)
	renderStart()
}

// hover only shows if placement is valid
function hoverEventStart(e) {
	dom.cells.forEach((cell) => {
		cell.classList.remove("addShipHover")
	})

	let coords = e.target.dataset.coords.split(",").map((item) => {
		return parseInt(item, 10)
	})

	let direction = dom.directionBtn.dataset.direction
	let hoverLength = getHoverLength()

	if (
		!player1Board.checkPlacement(
			coords[0],
			coords[1],
			direction,
			hoverLength
		)
	) {
		return
	}

	let index = dom.cells.indexOf(e.target)
	for (let i = 0; i < hoverLength; i++) {
		if (direction === "h") {
			dom.cells[index + i].classList.add("addShipHover")
		}
		if (direction === "v") {
			dom.cells[index + 10 * i].classList.add("addShipHover")
		}
	}
}

function getHoverLength() {
	if (player1Board.ships.length === 0) {
		return 5
	}
	if (player1Board.ships.length === 1) {
		return 4
	}
	if (player1Board.ships.length === 2) {
		return 3
	}
	if (player1Board.ships.length === 3) {
		return 3
	}
	if (player1Board.ships.length === 4) {
		return 2
	}
}

// check ship array length, show message saying what ship will be added next
function getMessageStart() {
	dom.board1Message.textContent = ""

	if (player1Board.ships.length === 0) {
		return "Place your carrier"
	}
	if (player1Board.ships.length === 1) {
		return "Place your battleship"
	}
	if (player1Board.ships.length === 2) {
		return "Place your cruiser"
	}
	if (player1Board.ships.length === 3) {
		return "Place your submarine"
	}
	if (player1Board.ships.length === 4) {
		return "Place your destroyer"
	}
}

function checkIfReady() {
	if (player1Board.ships.length === 5) {
		console.log("ready")
		renderBoards()
	}
}

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
	// turn dataset coords into array
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
