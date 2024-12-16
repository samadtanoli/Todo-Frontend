import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TodoDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/todos/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setTodo(response.data);
      } catch (err) {
        const errorMessage = err.response?.status === 401
          ? 'You are not authorized to view this todo'
          : 'Failed to fetch Todo';
        setError(errorMessage);
      }
    };

    fetchTodo();
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {error && <p className="text-red-500">{error}</p>}
      {todo ? (
        <div>
          <h1 className="text-2xl font-bold">{todo.title}</h1>
          <p>{todo.description}</p>
          <p>Due Date: {new Date(todo.dueDate).toLocaleDateString()}</p>
          <p>Status: {todo.completed ? 'Completed' : 'Pending'}</p>
          <button
            className="bg-blue-500 text-white p-2 mt-4 rounded"
            onClick={() => navigate('/')}
          >
            Back to Todos
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TodoDetails;
