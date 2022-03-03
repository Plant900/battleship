import { createShip } from "../createShip"

describe("createShip", () => {
	let obj

	beforeEach(() => {
		obj = createShip(5)
		obj.hit(0)
		obj.hit(1)
		obj.hit(2)
		obj.hit(3)
		obj.hit(4)
	})

	test("should return an object", () => {
		expect(typeof obj).toBe("object")
	})

	test("should return an object with specified length", () => {
		expect(obj.length.length).toEqual(5)
	})

	test("hit function should indicate on length array where the ship is hit", () => {
		expect(obj.length).toEqual([1, 1, 1, 1, 1])
	})

	test("isSunk should return true if all locations on ship have been hit", () => {
		expect(obj.isSunk()).toBe(true)
	})

	test("ship should name itself based on its length", () => {
		expect(obj.name).toBe("aircraftCarrier")
	})
})
