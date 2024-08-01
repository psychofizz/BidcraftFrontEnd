import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 shadow-2xl">
      <div className="relative bg-bidcraft-dark  rounded-lg  w-full max-w-md sm:max-w-screen-sm ">
        <div className="flex flex-col l">
          <div className="flex-1">
            {children}
          </div>
          <div className="mt-4 flex justify-end">
            <button 
              onClick={onClose} 
              className="m-5 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
