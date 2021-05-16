export default class ConsolidatingServices {
	/**
	 * Get merged barcode of all the products from two companies with different barcode, products with same barcode will be considered same products that will be removed from the merged data.
	 * @param {array} barcodesA - Array of objects of barcode information from company A.
	 *  * @param {array} barcodesB - Array of objects of barcode information from company B.
	 * @returns {array} - Array that got barcode from both company merged in.
	 */
	static getMergedBarcode(barcodesA, barcodesB) {
		let mergedBarcode = [...barcodesA];
		barcodesB.forEach((element) => {
			if (
				!barcodesA.some((barcode) => {
					return barcode.Barcode === element.Barcode;
				})
			) {
				mergedBarcode.push(element);
			}
		});
		return mergedBarcode;
	}

	/**
	 * Join the catalog data and SKUs data by SKU, pull the description and company into the new data set
	 * @param {array} catalogData - Array of objects of catalog data from a company.
	 * @param {string} company - Company of the catalog, this company name will be added to the returned data.
	 * @param {string} mergedSKUs - This should contain the products with SKUs
	 * @returns {array} - Array with product SKU, product decription, and which company is it from
	 */
	static getMergedSKUWithSource(catalogData, company, mergedSKUs) {
		const mergedData = [];
		catalogData.forEach((element) => {
			if (
				mergedSKUs.find((product) => {
					return element.SKU === product.SKU;
				})
			) {
				mergedData.push({
					SKU: element.SKU,
					Description: element.Description,
					Source: company,
				});
			}
		});
		return mergedData;
	}
}
