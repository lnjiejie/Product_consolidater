import csvToJson from "csvtojson";

export default class GetSupplier {
	static async getSupplierA() {
		let supplierA = "";

		await csvToJson()
			.fromFile("input/catalogA.csv")
			.then((data) => {
				supplierA = data;
			})
			.catch((err) => {
				// log error if any
				console.log(err);
			});

		return supplierA;
	}

	static async getSupplierB() {
		let supplierB = "";

		await csvToJson()
			.fromFile("input/catalogB.csv")
			.then((data) => {
				supplierB = data;
			})
			.catch((err) => {
				// log error if any
				console.log(err);
			});

		return supplierB;
	}
}
