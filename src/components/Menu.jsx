import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Menu ({
  id, className, anchorEl, anchorOrigin, transformOrigin, onClose, items
}) {
  let display = anchorEl ? 'block' : 'none';
  let divStyle = {
    transformOrigin,
    display
  };
  return (
    <div id={id} style={divStyle}>
      {items.map((item) => (
            <div key={item.name} onClick={onClose} sx={{ backgroundColor: '#9AB3BA' }}>
              <Link to={item.link} style={{ textDecoration: 'none', color: '#FDCB0B' }}>
                <Typography textAlign="center">{item.name}</Typography>
              </Link>
            </div>
          ))}
    </div>
  );
};
