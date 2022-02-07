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

import { Grid, Typography } from '@mui/material';

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
            <Grid style={{ padding: "1rem" }}>
              <Typography variant="h2">
                There's nothing here!
              </Typography>
            </Grid>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
  , root);
