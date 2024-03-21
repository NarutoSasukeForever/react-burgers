import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal'; 
import styles from './IngredientDetails.module.css'; 


const IngredientDetails = ({ isOpen, onClose, ingredient }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.content}>

        <div className={styles.header}>
          <p className="text text_type_main-large">Детали ингредиента</p>
          <button className={styles.closeButton} onClick={onClose}>
          <img src="./icon.png" alt="icon" />
          </button>
        </div>

        <div className={styles.picture}>
          <img src={ingredient.image} alt={ingredient.name} className={styles.foodImage} />
          <p className="text text_type_main-medium mb-8 mt-4">{ingredient.name}</p>
        </div>

        <div className={styles.Ingredients}>
          <div>
            <p className="text text_type_main-default text_color_inactive">Калории,ккал:</p>
            <p className="text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
          </div>

          <div>
            <p className="text text_type_main-default text_color_inactive">Белки,г:</p>
            <p className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</p>
          </div>

          <div>
            <p className="text text_type_main-default text_color_inactive">Жиры,г:</p>
            <p className="text text_type_digits-default text_color_inactive">{ingredient.fat}</p>
          </div>

          <div>
            <p className="text text_type_main-default text_color_inactive">Углеводы,г:</p>
            <p className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</p>
          </div>

        </div>

      </div>
    </Modal>
  );
};

IngredientDetails.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  ingredient: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
  }).isRequired,
};

export default IngredientDetails;
