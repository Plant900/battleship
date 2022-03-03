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

// iterates through gameboards, rendering based on each cell
// gives each html cell the corresponding coordinates
function renderBoards() {
	dom.player1Dom.innerHTML = ""
	dom.player2Dom.innerHTML = ""

	player1Board.board.forEach((row, yIndex) => {
		row.forEach((cell, xIndex) => {
			let domCell = document.createElement("div")
			domCell.classList.add("cell")
			domCell.dataset.coords = [yIndex, xIndex]
			domCell.innerHTML = determineCellDisplay(cell)
			dom.player1Dom.appendChild(domCell)
		})
	})
	cpu1Board.hiddenBoard.forEach((row, yIndex) => {
		row.forEach((cell, xIndex) => {
			let domCell = document.createElement("div")
			domCell.classList.add("cell")
			domCell.classList.add("cpuCell")
			domCell.dataset.coords = [yIndex, xIndex]
			domCell.innerHTML = determineCellDisplay(cell)
			dom.player2Dom.appendChild(domCell)
		})
	})

	dom = cacheDom()
	dom.cpuCells.forEach((cell) => {
		cell.addEventListener("click", clickEvent)
	})
}

// used when rendering gameboards
function determineCellDisplay(cell) {
	if (cell === undefined) {
		return "&nbsp"
	}
	if (cell) {
		return "x"
	}
}

function clickEvent(e) {
	let coords = e.target.dataset.coords

	coords = coords.split(",").map((item) => {
		return parseInt(item, 10)
	})

	player1.attack(cpu1, cpu1Board, coords[0], coords[1])
	renderBoards()
}

renderBoards()
// dom = cacheDom()

// console.log(dom.cpuCells)

// dom.cpuCells.forEach((cell) => {
// 	cell.addEventListener("click", clickEvent)
// })
