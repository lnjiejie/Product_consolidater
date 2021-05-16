/**
 * Function that distinct elements of an array of primitive key passed
 * @param {array} array - Array of object to filter
 *  * @param {string} key - Key of the object in the array as the primitive key to process the array
 * @returns {array} - Array with the distinct elements with unique value of the selected primitive key
 */
const distinctWithKey = (array, key) => {
	const result = [];
	const map = new Map();

	// the array can't be null or undefined, and the key passed has to be in the objects in the array
	if (
		array !== null &&
		array !== undefined &&
		Object.keys(array[0]).includes(key)
	) {
		array.forEach((element) => {
			if (!map.has(element[key])) {
				map.set(element[key], true);
				result.push(element);
			}
		});
	}

	return result;
};

/**
 * Sort an array of object by the value of the object's properties with string value
 * @param {array} array - Array of object to sort
 *  * @param {string} key - name of the object's properties
 * @returns {array} - The sorted array
 */
const sortArrayOfObjByStrings = (array, key) => {
	// the array can't be null or undefined, and the key passed has to be in the objects in the array
	if (
		array !== null &&
		array !== undefined &&
		Object.keys(array[0]).includes(key)
	) {
		array.sort((a, b) => {
			let fa = a[key].toLowerCase(),
				fb = b[key].toLowerCase();

			if (fa < fb) {
				return -1;
			}
			if (fa > fb) {
				return 1;
			}
			return 0;
		});
	}

	return array;
};

export { distinctWithKey, sortArrayOfObjByStrings };
