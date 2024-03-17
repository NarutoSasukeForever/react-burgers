import React, { Component } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerIngredients.module.css'
import data from '../../utils/data'; 


export default class BurgerIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'one'
    };
  }

  setCurrent = (value) => {
    this.setState({ current: value });
  }

  render() {
    const { current } = this.state;

    return (
      <>
      <main className={styles.container}> 
        <section className='mb-10 mt-10'>
          <h1 className="text_type_main-large mb-5">Соберите бургер</h1>
            <div style={{ display: 'flex' }}>
              <Tab value="one" active={current === 'one'} onClick={() => this.setCurrent('one')}>
                Булки
              </Tab>
              <Tab value="two" active={current === 'two'} onClick={() => this.setCurrent('two')}>
                Соусы
              </Tab>
              <Tab value="three" active={current === 'three'} onClick={() => this.setCurrent('three')}>
                Начинки
              </Tab>
            </div>
        </section>

        <section className='mb-10'>
          <h1 className="text_type_main-medium mb-6">Булки</h1>
          <div style={{ display: 'flex' }} className='ml-4 mr-6'>
          
            <div style={{position: 'relative'}}>
              <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt='булка' className="ml-4 mr-4"/>
              <Counter count={1} size="default" extraClass="m-1" />
              <div className={styles.price}><p className="text text_type_digits-default mr-1">1255</p><CurrencyIcon type="primary"/></div>
              <div><p className="text text_type_main-default">Краторная булка N-200i</p></div>
            </div>

            <div>
              <img src="https://code.s3.yandex.net/react/code/bun-01.png" alt='булка' className="ml-4 mr-4"/>
              <div className={styles.price}><p className="text text_type_digits-default mr-1">1255</p><CurrencyIcon type="primary"/></div>
              <div><p className="text text_type_main-default">Флюоресцентная булка R2-D3</p></div>
            </div>
          
          </div>
        </section>
        
        <section>
          <h1 className="text_type_main-medium mb-6">Соусы</h1>
          <div style={{ display: 'flex' }} className='ml-4 mr-6'>

            <div className='mb-8'>
              <div className='mr-6'>
                  <img src="https://code.s3.yandex.net/react/code/sauce-02.png" alt='соус' className="ml-4 mr-4"/>
                  <div className={styles.price}><p className="text text_type_digits-default mr-1">90</p><CurrencyIcon type="primary"/></div>
                  <div><p className="text text_type_main-default" style={{display:'flex', justifyContent: 'center'}}>Соус Spicy-X</p></div>
                </div>

                <div style={{position:'relative'}} className='mr-6'>
                  <img src="https://code.s3.yandex.net/react/code/sauce-03.png" alt='соус'  className="ml-4 mr-4"/>
                  <Counter count={1} size="default" extraClass="m-1" />
                  <div className={styles.price}><p className="text text_type_digits-default mr-1">15</p><CurrencyIcon type="primary"/></div>
                  <div><p className="text text_type_main-default">Соус традиционный галактический</p></div>
                </div>
            </div>

            <div>
              <div>
                  <img src="https://code.s3.yandex.net/react/code/sauce-04.png" alt='соус'  className="ml-4 mr-4"/>
                  <div className={styles.price}><p className="text text_type_digits-default mr-1">80</p><CurrencyIcon type="primary"/></div>
                  <div><p className="text text_type_main-default">Соус фирменный Space Sauce</p></div>
              </div>

                <div>
                  <img src="https://code.s3.yandex.net/react/code/sauce-01.png" alt='соус'  className="ml-4 mr-4"/>
                  <div className={styles.price}><p className="text text_type_digits-default mr-1">88</p><CurrencyIcon type="primary"/></div>
                  <div><p className="text text_type_main-default">Соус с шипами Антарианского плоскоходца</p></div>
                </div>
            </div>
          </div>

        </section>
      </main>
      </>
    )
  }
}
