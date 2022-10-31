import axiosRoot from 'axios';

export const axios = axiosRoot.create();

export const setAuthToken = (token:string) => {
	if (token) {
		axios.defaults.headers['Authorization'] = `Bearer ${token}`;
	} else {
	delete axios.defaults.headers['Authorization'];
	}
}