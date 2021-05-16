import BarcodeServices from "./services/BarcodeServices.js";
import CatalogServices from "./services/CatalogServices.js";
import FileWritingServices from "./services/FileWritingServices.js";
import ConsolidateServices from "./services/ConsolidateServices.js";
import { distinctWithKey, sortArrayOfObjByStrings } from "./utils/Utils.js";

// Get all the barcode and catalog data from input files
const [barcodesA, barcodesB, catalogA, catalogB] = await Promise.all([
	BarcodeServices.getBarcodes("A"),
	BarcodeServices.getBarcodes("B"),
	CatalogServices.getCatalog("A"),
	CatalogServices.getCatalog("B"),
]);

// Get merged barcode from company A and B, and removed repetitive SKUs
let mergedSKUs = distinctWithKey(
	ConsolidateServices.getMergedBarcode(barcodesA, barcodesB),
	"SKU"
);

// Combining products information from the two companies
const mergedSKUWithSource = [
	...ConsolidateServices.getMergedSKUWithSource(catalogA, "A", mergedSKUs),
	...ConsolidateServices.getMergedSKUWithSource(catalogB, "B", mergedSKUs),
];

// Removed products with same SKU from different companies
const result = distinctWithKey(mergedSKUWithSource, "SKU");

// Sort the array with by description in a readable order
sortArrayOfObjByStrings(result, "Description");

// Write the result into csv file
FileWritingServices.writeJsonToCsv(result, "./output/result.csv");
