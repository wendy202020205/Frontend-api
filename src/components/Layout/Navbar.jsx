import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Mi App
          </Link>
          
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">
                Hola, {user?.name}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <div className="space-x-2">
              <Link
                to="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Registrarse
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;