import { Link } from 'react-router-dom';

const TodoCard = ({ todo }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md hover:shadow-lg transition duration-200">
      <h2 className="text-xl font-semibold text-primary">{todo.title}</h2>
      <p className="text-gray-500">{todo.description || 'No description'}</p>
      <div className="flex justify-between items-center mt-2">
        <span className={`text-sm px-2 py-1 rounded ${todo.completed ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
          {todo.completed ? 'Completed' : 'Pending'}
        </span>
        <Link to={`/todo/${todo._id}`} className="text-primary hover:underline">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TodoCard;
