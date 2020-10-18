import { API_KEY, API, API_VERSION } from '../config';
import axios from 'axios';

/**
 * API to get data
 */

const api = `${API}/${API_VERSION}/${API_KEY}`;

export const getData = () => {
	return axios
		.get(api)
		.then((data) => {
			return data;
		})
		.catch((error) => {
			console.log(error);
			return { error: true };
		});
};
