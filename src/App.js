// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Redirect } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import SecretForm from './components/Secrets/SecretForm';
import SecretList from './components/Secrets/SecretList';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/secrets" component={SecretList} />
          <Route path="/post-secret" component={SecretForm} />
          {/* <Route path="/" exact>
            <h2>Welcome to Your App</h2>
          </Route> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
