import csvToJson from "csvtojson";

export default class GetCatalog {
	static async getCatalogA() {
		let catalogA = "";

		await csvToJson()
			.fromFile("input/catalogA.csv")
			.then((data) => {
				catalogA = data;
			})
			.catch((err) => {
				// log error if any
				console.log(err);
			});

		return catalogA;
	}

	static async getCatalogB() {
		let catalogB = "";

		await csvToJson()
			.fromFile("input/catalogB.csv")
			.then((data) => {
				catalogB = data;
			})
			.catch((err) => {
				// log error if any
				console.log(err);
			});

		return catalogB;
	}
}
