import csvToJson from "csvtojson";
export default class BarcodeServices {
	static async getBarcodes(companyName) {
		let barcodes = "";

		// Assumption: all the barcode is saved in barcodes${companyName} files
		await csvToJson()
			.fromFile(`input/barcodes${companyName}.csv`)
			.then((data) => {
				barcodes = data;
			})
			.catch((err) => {
				// log error if any
				console.log(err);
			});

		return barcodes;
	}
}
