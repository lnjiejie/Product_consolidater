import GetBarcode from "./services/GetBarcode.js";
import GetCatalog from "./services/GetCatalog.js";
import {
	writeJsonToCsv,
	distinctWithKey,
	sortArrayOfObjByStrings,
} from "./utils/Utils.js";

// Get all the barcode and catalog data from input files
const [barcodesA, barcodesB, catalogA, catalogB] = await Promise.all([
	GetBarcode.getBarcodesA(),
	GetBarcode.getBarcodesB(),
	GetCatalog.getCatalogA(),
	GetCatalog.getCatalogB(),
]);

// Get merged barcode of all the products from two companies with different barcode
const getMergedBarcodes = (barcodesA, barcodesB) => {
	let mergedBarcodes = [];
	mergedBarcodes = [...barcodesA];
	barcodesB.forEach((element) => {
		if (
			!barcodesA.some((barcode) => {
				return barcode.Barcode === element.Barcode;
			})
		) {
			mergedBarcodes.push(element);
		}
	});
	return mergedBarcodes;
};

// Get merged barcode from company A and B, and removed repetitive SKUs
let mergedSKUs = distinctWithKey(
	getMergedBarcodes(barcodesA, barcodesB),
	"SKU"
);

// Pull product information from catalog table with the same SKU
const getMergedSKUWithSource = (catalog, source) => {
	const mergedData = [];
	catalog.forEach((element) => {
		if (
			mergedSKUs.find((product) => {
				return element.SKU === product.SKU;
			})
		) {
			mergedData.push({
				SKU: element.SKU,
				Description: element.Description,
				Source: source,
			});
		}
	});
	return mergedData;
};

// Combining products information from the two companies
const mergedSKUWithSource = [
	...getMergedSKUWithSource(catalogA, "A"),
	...getMergedSKUWithSource(catalogB, "B"),
];

// Removed products with same SKU from different companies
const result = distinctWithKey(mergedSKUWithSource, "SKU");

// Sort the array with by description in a readable order
sortArrayOfObjByStrings(result, "Description");

// Write the result into csv file
writeJsonToCsv(result, "./output/result.csv");
