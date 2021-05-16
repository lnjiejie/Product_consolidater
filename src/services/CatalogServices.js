import csvToJson from "csvtojson";

export default class CatalogServices {
	static async getCatalog(companyName) {
		let catalog = "";

		// Assumption: all the barcode is saved in catalog${companyName} files
		await csvToJson()
			.fromFile(`input/catalog${companyName}.csv`)
			.then((data) => {
				catalog = data;
			})
			.catch((err) => {
				// log error if any
				console.log(err);
			});

		return catalog;
	}
}
