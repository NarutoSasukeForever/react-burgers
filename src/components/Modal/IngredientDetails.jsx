import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal'; 
import styles from './IngredientDetails.module.css'; 

const IngredientDetails = ({ currentIngredient }) => {
  return (
      <div className={styles.content}>

        <div className={styles.header}>
          <p className="text text_type_main-large">Детали ингредиента</p>
        </div>

        <div className={styles.picture}>
          <img src={currentIngredient.image} alt={currentIngredient.name} className={styles.foodImage} />
          <p className="text text_type_main-medium mb-8 mt-4">{currentIngredient.name}</p>
        </div>

        <div className={styles.Ingredients}>
          <div>
            <p className="text text_type_main-default text_color_inactive">Калории, ккал:</p>
            <p className="text text_type_digits-default text_color_inactive">{currentIngredient.calories}</p>
          </div>

          <div>
            <p className="text text_type_main-default text_color_inactive">Белки, г:</p>
            <p className="text text_type_digits-default text_color_inactive">{currentIngredient.proteins}</p>
          </div>

          <div>
            <p className="text text_type_main-default text_color_inactive">Жиры, г:</p>
            <p className="text text_type_digits-default text_color_inactive">{currentIngredient.fat}</p>
          </div>

          <div>
            <p className="text text_type_main-default text_color_inactive">Углеводы, г:</p>
            <p className="text text_type_digits-default text_color_inactive">{currentIngredient.carbohydrates}</p>
          </div>

        </div>

      </div>
  );
};

IngredientDetails.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  currentIngredient: PropTypes.object.isRequired,
};

export default IngredientDetails;
