import axios from './customize-axios';

const fetchAllBook = () => {
   return axios.get('/book');
};

const postAddBook = (name, publishedDate, genres) => {
   return axios.post('/book', { name, publishedDate, genres });
};

const putUpdateBook = (id, name, publishedDate, genres) => {
   return axios.put(`/book/${id}`, { name, publishedDate, genres });
};

const deleteBook = (id) => {
   return axios.delete(`/book/${id}`);
};

const fetchAllAuthor = () => {
   return axios.get('/author');
};

export { fetchAllBook, postAddBook, fetchAllAuthor, putUpdateBook, deleteBook };
