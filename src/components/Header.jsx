import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-semibold">DevConnect</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/features" className="hover:text-gray-300">Features</Link>
      </nav>
    </header>
  );
}

export default Header;