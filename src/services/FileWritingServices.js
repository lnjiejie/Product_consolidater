import jsonToCsv from "json-2-csv";
import fs from "fs";

/**
 * Function that convert a JSON object into a csv file, array cannot be empty or undefined
 * @param {array} array - Object that needs to be written into csv file
 * @param {string} filename - the file name of the csv file with the output
 * @returns {boolean} - Return false if there's error, true for successfully written
 */
export default class CatalogServices {
	static writeJsonToCsv(array, filename) {
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
	}
}
