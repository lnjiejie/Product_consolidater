import {
	writeJsonToCsv,
	distinctWithKey,
	sortArrayOfObjByStrings,
} from "./Utils.js";

describe("Test Utils", () => {
	test("distinctWithKey", () => {
		const testArray = [
			{
				name: "jeff",
				age: 23,
			},
			{
				name: "Gino",
				age: 21,
			},
			{
				name: "Gino",
				age: 24,
			},
		];

		const emptyArray = distinctWithKey(null, "name");
		const undefinedArray = distinctWithKey(undefined, "name");
		const validArray = distinctWithKey(testArray, "name");
		const invalidKey = distinctWithKey(testArray, "sex");

		expect(emptyArray).toEqual([]);
		expect(undefinedArray).toEqual([]);
		expect(validArray).toEqual([
			{
				name: "jeff",
				age: 23,
			},
			{
				name: "Gino",
				age: 21,
			},
		]);
		expect(invalidKey).toEqual([]);
	});

	test("sortArrayOfObjByStrings", () => {
		const testArray = [
			{
				name: "Gino",
				age: 21,
			},
			{
				name: "jeff",
				age: 23,
			},
			{
				name: "Gino",
				age: 24,
			},
		];

		const validArray = sortArrayOfObjByStrings(testArray, "name");
		const emptyArray = sortArrayOfObjByStrings(null, "name");
		const undefinedArray = sortArrayOfObjByStrings(undefined, "name");
		const invalidKey = sortArrayOfObjByStrings(testArray, "sex");

		expect(validArray).toEqual([
			{
				name: "Gino",
				age: 21,
			},

			{
				name: "Gino",
				age: 24,
			},
			{
				name: "jeff",
				age: 23,
			},
		]);
		expect(emptyArray).toEqual(null);
		expect(undefinedArray).toEqual(undefined);
		expect(invalidKey).toEqual(testArray);
	});
});
