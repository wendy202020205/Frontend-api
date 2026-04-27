import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/Layout/PrivateRoute';
import Navbar from './components/Layout/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ItemList from './components/Items/ItemList';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/items"
              element={
                <PrivateRoute>
                  <ItemList />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Navigate to="/items" />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;