import React from 'react';
import Modal from './Modal'; 
import PropTypes from 'prop-types'; 
import styles from './ModalOverlay.module.css'; 

const OrderDetails = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.content}>
        <p className={styles.digits}>034536</p>
        <p className="text text_type_main-small">индентификатор заказа</p>
        <img src="./done.png" alt="done" className={styles.image} />
        <p className="text text_type_main-small mb-2">Ваш заказ начали готовить</p>
        <p className="text text_type_main-small text_color_inactive">Дождитесь готовности на орбитальной станции</p>
      </div>
    </Modal>
  );
};

OrderDetails.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default OrderDetails;
