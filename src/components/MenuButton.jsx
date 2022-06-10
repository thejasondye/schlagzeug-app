import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function MenuButton ({
  icon_images, clickHandler, id, className
}) {


  return (
    <button
      onClick={clickHandler}
      color="inherit"
      id={id}
      className={className}
    >
      <img src={icon_images} />
    </button>
  );
};

MenuButton.propTypes = {
  icon_images: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  clickHandler: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string
};
