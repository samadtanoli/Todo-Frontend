import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-primary text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">
        <Link to="/">TodoApp</Link>
      </h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <button onClick={handleLogout} className="hover:underline">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
