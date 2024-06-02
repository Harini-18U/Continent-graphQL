import React from 'react';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">Continent App</a>
        </div>
      </nav>
      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default App;