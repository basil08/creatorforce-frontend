import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes.js';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.main />}>
            </Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
