import React from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import { AuthProvider } from '../context/auth';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { PrivateRoute } from './privateRoute';


const Rotas = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/home/:questionary/:id" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />

        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default Rotas