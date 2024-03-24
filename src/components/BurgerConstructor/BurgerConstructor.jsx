import styles from './BurgerConstructor.module.css'
import { ingredientType } from '../../utils/types.js';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from './OrderDetails'; 
import { useModal } from '../../hooks/useModal';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const BurgerConstructor = ({ingredients}) => {
  const topElements = ingredients.filter(item => item.name === "Краторная булка N-200i");
  const bottomElements = ingredients.filter(item => item.name === "Краторная булка N-200i");
  const mainElements = ingredients.filter(item => item.type === 'main');

  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <section className={styles.container}>
        <div className='mb-2'>
          {topElements.map((item, index) => (
          <div key={index} className='mb-2'>
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={`${item.name} (верх)`}
                  price={item.price}
                  thumbnail={item.image}
                />
              </div>
            ))}
        </div>

        <div className={styles.main}>
          <div>
            {mainElements.map((item, index) => (
              <div key={index} className={styles.element}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </div>
            ))}
          </div>
        </div>

        <div className='mt-2'>
        {bottomElements.map((item, index) => (
          <div key={index} className='mb-2'>
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={`${item.name} (низ)`}
                  price={item.price}
                  thumbnail={item.image}
                />
              </div>
            ))}
        </div>
      
        <div className={styles.buttonContainer}>
          <div className={styles.priceBottom}><p className="text text_type_digits-medium mr-1">610</p><CurrencyIcon type="primary" /></div>
          <Button htmlType="button" type="primary" size="large" onClick={openModal}>
          Оформить заказ
          </Button>
        </div>
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <OrderDetails isOpen={isModalOpen} onClose={closeModal} />
          </Modal>
        )}
</section>
  )
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType).isRequired
};

export default BurgerConstructor