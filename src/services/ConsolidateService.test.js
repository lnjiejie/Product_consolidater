import ConsolidateServices from "./ConsolidateServices";

describe("Test ConsolidateServices", () => {
	test("getMergedBarcode", () => {
		const testArrayA = [
			{
				name: "tea",
				Barcode: 23111,
			},
			{
				name: "coke",
				Barcode: 21111,
			},
			{
				name: "coffee",
				Barcode: 24111,
			},
		];
		const testArrayB = [
			{
				name: "tea",
				Barcode: 23111,
			},
			{
				name: "coke",
				Barcode: 21121,
			},
			{
				name: "pepsi",
				Barcode: 24111,
			},
		];

		const validDataSets = ConsolidateServices.getMergedBarcode(
			testArrayA,
			testArrayB
		);
		const emptyBarcodeB = ConsolidateServices.getMergedBarcode(
			testArrayA,
			null
		);

		expect(validDataSets).toEqual([
			{
				name: "tea",
				Barcode: 23111,
			},
			{
				name: "coke",
				Barcode: 21111,
			},
			{
				name: "coffee",
				Barcode: 24111,
			},
			{
				name: "coke",
				Barcode: 21121,
			},
		]);
		expect(emptyBarcodeB).toEqual(testArrayA);
	});

	test("getMergedSKUWithSource", () => {
		const testBarcodeA = [
			{
				SKU: "tea",
				Barcode: 23111,
			},
			{
				SKU: "coke",
				Barcode: 21111,
			},
			{
				SKU: "coffee",
				Barcode: 24111,
			},
		];
		const testCatalogA = [
			{
				SKU: "tea",
				Description: "this is a drink",
			},
			{
				SKU: "coke",
				Description: "this is popular",
			},
			{
				SKU: "pepsi",
				Description: "this is not as popular as coke",
			},
		];

		const validDataSets = ConsolidateServices.getMergedSKUWithSource(
			testCatalogA,
			"company A",
			testBarcodeA
		);

		expect(validDataSets).toEqual([
			{ SKU: "tea", Description: "this is a drink", Source: "company A" },
			{ SKU: "coke", Description: "this is popular", Source: "company A" },
		]);
	});
});
