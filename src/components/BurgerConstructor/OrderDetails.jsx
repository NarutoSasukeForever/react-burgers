import React from 'react';
import styles from './OrderDetails.module.css'; 

const OrderDetails = () => {
  return (
      <div className={styles.content}>
        <p className={styles.digits}>034536</p>
        <p className="text text_type_main-small">индентификатор заказа</p>
        <img src="./done.png" alt="done" className={styles.image} />
        <p className="text text_type_main-small mb-2">Ваш заказ начали готовить</p>
        <p className="text text_type_main-small text_color_inactive">Дождитесь готовности на орбитальной станции</p>
      </div>
  );
};

export default OrderDetails;