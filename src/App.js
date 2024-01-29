import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Home from './home';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory({ basename: '/clas' });
function App() {
  return (
    <Router history={history} basename="/clas">
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
  );
}

export default App;
