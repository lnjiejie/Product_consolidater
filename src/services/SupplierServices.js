import csvToJson from "csvtojson";
export default class SupplierServices {
	static async getSupplier(companyName) {
		let supplier = "";

		// Assumption: all the barcode is saved in supplier${companyName} files
		await csvToJson()
			.fromFile(`input/catalog${companyName}.csv`)
			.then((data) => {
				supplier = data;
			})
			.catch((err) => {
				// log error if any
				console.log(err);
			});

		return supplier;
	}
}
