const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
  const styles = {
    primary: 'bg-primary text-white px-4 py-2 rounded hover:bg-indigo-600',
    secondary: 'bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles[variant]} transition duration-200`}
    >
      {children}
    </button>
  );
};

export default Button;
