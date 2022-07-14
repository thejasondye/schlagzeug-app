import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Menu ({
  id, className, anchorEl, anchorOrigin, transformOrigin, isOpen, onClose, items
}) {

  let display = anchorEl ? 'block' : 'none';
  let divStyle = {
    transformOrigin,
    display
  };

  return (
    <div id={id} style={divStyle}>
      {items.map((item) => (
            <div
              key={item.name}
              onClick={onClose}
              style={{ backgroundColor: '#9AB3BA' }}
            >
              <Link to={item.link}>
                <div className="nav-menu-item">{item.name}</div>
              </Link>
            </div>
          ))}
    </div>
  );
};
