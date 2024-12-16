import { useEffect, useState } from 'react';
import { fetchTodos } from '../api';
import TodoCard from '../components/TodoCard';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const { data } = await fetchTodos();
      setTodos(data);
    };
    getTodos();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-primary">Your Todos</h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {todos.map((todo) => (
            <TodoCard key={todo._id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
