import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import App from './App';
import Home from './routes/Home';
import Landing from './routes/Landing';

const root = document.getElementById('app');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="Home" element={<Home />} />
      <Route path="Landing" element={<Landing />} />
    </Routes>
  </BrowserRouter>
  , root);
