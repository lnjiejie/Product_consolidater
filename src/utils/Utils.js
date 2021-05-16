import jsonToCsv from "json-2-csv";
import fs from "fs";

/**
 * Function that distinct elements of an array of primitive key passed
 * @param {array} array - Array of object to filter
 *  * @param {string} key - Key of the object in the array as the primitive key to process the array
 * @returns {array} - Array with the distinct elements with unique value of the selected primitive key
 */
const distinctWithKey = (array, key) => {
	const result = [];
	const map = new Map();

	// the array can't be null or undefined, and the key passed has to be in the objects in the array
	if (
		array !== null &&
		array !== undefined &&
		Object.keys(array[0]).includes(key)
	) {
		array.forEach((element) => {
			if (!map.has(element[key])) {
				map.set(element[key], true);
				result.push(element);
			}
		});
	}

	return result;
};

/**
 * Sort an array of object by the value of the object's properties with string value
 * @param {array} array - Array of object to sort
 *  * @param {string} key - name of the object's properties
 * @returns {array} - The sorted array
 */
const sortArrayOfObjByStrings = (array, key) => {
	// the array can't be null or undefined, and the key passed has to be in the objects in the array
	if (
		array !== null &&
		array !== undefined &&
		Object.keys(array[0]).includes(key)
	) {
		array.sort((a, b) => {
			let fa = a[key].toLowerCase(),
				fb = b[key].toLowerCase();

			if (fa < fb) {
				return -1;
			}
			if (fa > fb) {
				return 1;
			}
			return 0;
		});
	}

	return array;
};

/**
 * Function that convert a JSON object into a csv file, array cannot be empty or undefined
 * @param {array} array - Object that needs to be written into csv file
 * @param {string} filename - the file name of the csv file with the output
 * @returns {boolean} - Return false if there's error, true for successfully written
 */
const writeJsonToCsv = (array, filename) => {
	(async () => {
		try {
			const csv = await jsonToCsv.json2csvAsync(array);

			// print CSV string
			console.log(
				`Below is the output: \n===================================\n${csv}\n===================================\nIt's been written in ${filename}`
			);

			// write CSV to a file
			fs.writeFileSync(filename, csv);
		} catch (err) {
			console.log(err);
		}
	})();
};

export { writeJsonToCsv, distinctWithKey, sortArrayOfObjByStrings };
