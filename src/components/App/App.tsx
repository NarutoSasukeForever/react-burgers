import styles from './App.module.css'
import AppHeader from '../AppHeader/AppHeader.jsx'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';


function App() {
  return (
    <>
    <AppHeader/>
      <main className={styles.flexContainer}>
         <div className={styles.flexColumn}>
          <BurgerIngredients/>
        </div>

        <div>
        <BurgerConstructor/>
        </div>
      </main>
    </>
  );
}

export default App;