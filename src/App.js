import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Login from './login';
import Home from './home';
import { getToken } from "./utils";
import { createBrowserHistory } from 'history';
const history = createBrowserHistory({ basename: '/clas' });
function App() {
  const token=getToken()
  return (
    <Router history={history} basename="/clas">
    <Routes>
    <Route path="/" element={token ? <Navigate to="/home" /> : <Login />} />
    <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
  );
}

export default App;
