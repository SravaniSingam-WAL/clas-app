import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    {token ?
      <Route path="/" element={<Home />} />
      :
      <Route path="/" element={<Login />} />
    }
    <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
  );
}

export default App;
