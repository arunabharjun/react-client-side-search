export const search = (keyword = '', data = []) => {
	/**
     * The result array
     */
	const res = [];

	/**
     * Preprocess keyword to looase all white spaces
     * and convert to all lower cases
     */
	const searchKey = preProcess(keyword);

	/**
     * After preprocessing if searchkey is
     * not equal to '' (an empty string)
     */
	if (searchKey) {
		/**
         * Map through every object
         * in the data array
         */
		data.map((obj) => {
			/**
             * Map through all the key
             * of the current object
             */
			Object.keys(obj).map((key) => {
				/**
                 * Check if that key contains the
                 * search key as a value and the 
                 * current is not already in the
                 * result array
                 */
				if (
					preProcess(obj[key]).includes(searchKey) &&
					!res.includes(obj)
				) {
					/**
                     * If the condition satisfies, push the
                     * current object in result array
                     */
					res.push(obj);
				}
			});
		});
	}

	/**
     * Return result array and
     * length of result array
     */
	return { res, hits: res.length };

	/**
     * Returns {"res":[],"hits":0}
     * if no results found or
     * the search key was empty
     */
};

/**
 * Return the value as a string 
 * without any white spaces and 
 * in lowercase form
 */
const preProcess = (value) => {
	/**
     * Result string
     */
	let res = '';

	/**
     * Check if the value is an object
     * & stringify if an object
     * otherwise set res to value
     */
	if (typeof value === 'object') {
		res = JSON.stringify(value);
	}
	else {
		res = value;
	}

	/**
     * Process & return the string
     */
	return String(res).toLowerCase().replace(/\s/g, '');
};
