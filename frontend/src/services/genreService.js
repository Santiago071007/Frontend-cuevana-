import axios from 'axios';

const API_URL = 'http://localhost:3000/generos';

export const getGenres = () => axios.get(API_URL);
export const createGenre = (data) => axios.post(API_URL, data);
export const updateGenre = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteGenre = (id) => axios.delete(`${API_URL}/${id}`);