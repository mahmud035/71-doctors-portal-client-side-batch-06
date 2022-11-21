import React from 'react';

const ConfirmationModal = ({
  title,
  message,
  successAction,
  modalData,
  closeModal,
}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-600">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successAction(modalData)}
              htmlFor="confirmation-modal"
              className="btn btn-error"
            >
              Confirm
            </label>
            <button onClick={closeModal} className="btn btn-accent">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
