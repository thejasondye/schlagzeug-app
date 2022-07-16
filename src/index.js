import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import App from './App';
import Music from './routes/Music';
import Blog from './routes/Blog';
import Home from './routes/Home';

const root = document.getElementById('app');

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="music" element={<Music />} />
        <Route path="blog" element={<Blog />} />
        <Route
          path="*"
          element={
            <div style={{ padding: "1rem" }}>
              <h2>
                There's nothing here!
              </h2>
            </div>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
  , root);
