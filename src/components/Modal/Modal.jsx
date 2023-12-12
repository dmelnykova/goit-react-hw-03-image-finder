// Modal.js

import React, { useEffect } from 'react';

const Modal = ({ image, onClose }) => {
  useEffect(() => {
    const handleCloseOnEsc = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleCloseOnEsc);

    return () => {
      window.removeEventListener('keydown', handleCloseOnEsc);
    };
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Modal;
