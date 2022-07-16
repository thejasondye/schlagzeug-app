import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function MenuButton ({
  icons, handleOpenMenu, handleCloseMenu, id, className, isOpen
}) {
  // for a future expansion of changing icons
  let icon = icons[0];
  let clickHandler = handleOpenMenu;

  if (isOpen) {
    icon = icons[1];
    clickHandler = handleCloseMenu;
  }

  return (
    // TODO: center this button
    <div>
      <button
        onClick={clickHandler}
        color="inherit"
        id={id}
        className={className}
      >
        <i className={icon} />
      </button>
    </div>
  );
};

MenuButton.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.string),
  clickHandler: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string
};
