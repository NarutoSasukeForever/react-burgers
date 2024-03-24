import { Tab, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerIngredients.module.css'
import React, { useState } from 'react';
import IngredientDetails from './IngredientDetails'; 
import Modal from '../Modal/Modal'; 
import PropTypes from 'prop-types';

const BurgerIngredients = ({ingredients}) => {
  const [current, setCurrent] = React.useState('one')
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const bunItems = ingredients.filter(item => item.type === "bun");
  const sauceItems = ingredients.filter(item => item.type === "sauce");
  const mainItems = ingredients.filter(item => item.type === "main");

  const handleIngredientClick = (ingredients) => {
    setSelectedIngredient(ingredients);
  };

  return (
    <>
      <section className={styles.flexContainer}>
          <section className='mb-10 mt-10'>
            <h1 className="text_type_main-large mb-5">Соберите бургер</h1>
              <div className={styles.tab}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                  Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                  Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                  Начинки
                </Tab>
              </div>
          </section>

          <div className={styles.ingredients}>
            <h1 className="text_type_main-medium mb-6">Булки</h1>
              <div className={styles.food}>
              {bunItems.map(item => (
                  <div key={item._id} onClick={() => handleIngredientClick(item)}>
                    <img src={item.image} alt={item.name}/>
                    <div className={styles.price}><p className="text text_type_digits-default mr-1">{item.price}</p><CurrencyIcon type="primary"/></div>
                    <div><p className="text text_type_main-default">{item.name}</p></div>
                  </div>
                ))}
              </div>

            <h1 className="text_type_main-medium mb-6">Соусы</h1>
              <div className={styles.food}>
                {sauceItems.map(item => (
                  <div key={item._id} onClick={() => handleIngredientClick(item)}>
                    <img src={item.image} alt={item.name}/>
                    <div className={styles.price}><p className="text text_type_digits-default mr-1">{item.price}</p><CurrencyIcon type="primary"/></div>
                    <div><p className="text text_type_main-default">{item.name}</p></div>
                  </div>
                ))}
              </div>

            <h1 className="text_type_main-medium mb-6">Начинки</h1>
              <div className={styles.food}>
                {mainItems.map(item => (
                  <div key={item._id} onClick={() => handleIngredientClick(item)}>
                    <img src={item.image} alt={item.name}/>
                    <div className={styles.price}><p className="text text_type_digits-default mr-1">{item.price}</p><CurrencyIcon type="primary"/></div>
                    <div><p className="text text_type_main-default">{item.name}</p></div>
                  </div>
                ))}
              </div>
          </div>
      </section>

      {selectedIngredient && (
      <Modal  
        title={'Детали ингредиента'}  
        onClose={() => setSelectedIngredient(null)}>  
        <IngredientDetails currentIngredient={selectedIngredient} /> 
      </Modal>
      )}
    </>
  )
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number,
    })
  ).isRequired,
};

export default BurgerIngredients
