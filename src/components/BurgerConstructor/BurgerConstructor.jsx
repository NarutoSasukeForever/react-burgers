import styles from './BurgerConstructor.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerConstructor = ({ingredients}) => {
  const topElements = ingredients.filter(item => item.name === "Краторная булка N-200i");
  const bottomElements = ingredients.filter(item => item.name === "Краторная булка N-200i");
  const mainElements = ingredients.filter(item => item.type === 'main');

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
          <Button htmlType="button" type="primary" size="large">
          Оформить заказ
          </Button>
        </div>
</section>
  )
}

export default BurgerConstructor
