import jsonData from '../assets/data.json';

/**
 * This function mocks a promise made
 * while making an axios api call 
 * to fetch dat since here the data
 * is present as a seperate json data file
 */
export const getData = () => {
	return new Promise((resolve, reject) => {
		if (jsonData) resolve({ data: jsonData });
		reject({ error: true });
	});
};
