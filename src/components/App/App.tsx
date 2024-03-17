import styles from './App.module.css'
import AppHeader from '../AppHeader/AppHeader.jsx'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';


function App() {
  return (
    <>
    <AppHeader/>
      <div className={styles.flexContainer}>
        <div>
          <BurgerIngredients/>
        </div>
        <div>
          <BurgerConstructor/>
        </div>
      </div>
    </>
  );
}

export default App;