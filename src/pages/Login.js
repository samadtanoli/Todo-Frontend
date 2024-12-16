import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';
import Button from '../components/Button';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(form);
      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-primary">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Button type="submit">Login</Button>
        <p className="mt-3 text-gray-500">
          Don't have an account? 
          {/* Link to the Register page */}
          <Link to="/register" className="text-primary underline ml-1">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
