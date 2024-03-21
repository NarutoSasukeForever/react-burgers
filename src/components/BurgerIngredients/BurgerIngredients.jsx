import { Tab, CurrencyIcon, Counter  } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import styles from './BurgerIngredients.module.css'
import React, { useState } from 'react';
import IngredientDetails from '../Modal/IngredientDetails'; 

const BurgerIngredients = ({ingredients}) => {
  const [current, setCurrent] = React.useState('one')
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const bunItems = ingredients.filter(item => item.type === "bun");
  const sauceItems = ingredients.filter(item => item.type === "sauce");
  const mainItems = ingredients.filter(item => item.type === "main");

  const handleIngredientClick = (ingredient) => {
    setSelectedIngredient(ingredient);
  };

  const handleCloseModal = () => {
    setSelectedIngredient(null);
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
              {bunItems.map(bun => (
                  <div key={bun._id} onClick={() => handleIngredientClick(bun)}>
                    <img src={bun.image} alt={bun.name}/>
                    <div className={styles.price}><p className="text text_type_digits-default mr-1">{bun.price}</p><CurrencyIcon type="primary"/></div>
                    <div><p className="text text_type_main-default">{bun.name}</p></div>
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
        <IngredientDetails isOpen={true} onClose={handleCloseModal} ingredient={selectedIngredient} />
      )}
    </>
  )
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
};

export default BurgerIngredients