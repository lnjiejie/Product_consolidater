import csvToJson from "csvtojson";

export default class GetBarcode {
	static async getBarcodesA() {
		let barcodesA = "";

		await csvToJson()
			.fromFile("input/barcodesA.csv")
			.then((data) => {
				barcodesA = data;
			})
			.catch((err) => {
				// log error if any
				console.log(err);
			});

		return barcodesA;
	}

	static async getBarcodesB() {
		let barcodesB = "";

		await csvToJson()
			.fromFile("input/barcodesB.csv")
			.then((data) => {
				barcodesB = data;
			})
			.catch((err) => {
				// log error if any
				console.log(err);
			});

		return barcodesB;
	}
}
