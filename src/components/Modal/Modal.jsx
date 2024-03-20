import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ModalOverlay.module.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src="./icon.png" alt="icon" />
        </button>
        <div className={styles.content}>
          <h2 className="text text_type_digits-large">034536</h2>
          <p className="text text_type_main-small">индентификатор заказа</p>
            <img src="./done.png" alt="done"/>
          <p className="text text_type_main-small mb-2">Ваш заказ начали готовить</p>
          <p className="text text_type_main-small text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
