import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust as per your backend
});

// Attach token to requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const login = (data) => API.post('/auth/login', data);
export const register = (data) => API.post('/auth/register', data);
export const fetchTodos = () => API.get('/todos');
export const fetchTodo = (id) => API.get(`/todos/${id}`);
export const createTodo = (data) => API.post('/todos', data);
export const updateTodo = (id, data) => API.put(`/todos/${id}`, data);
export const deleteTodo = (id) => API.delete(`/todos/${id}`);
