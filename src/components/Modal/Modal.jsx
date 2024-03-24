import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css';
import ModalOverlay from './ModalOverlay';
import { CloseIcon  } from '@ya.praktikum/react-developer-burger-ui-components'

const Modal = ({ onClose, children }) => {
  useEffect(() => {  
    function closeByEscape(evt) {  
      if(evt.key === 'Escape') {  
        onClose();  
      }  
    }  
      document.addEventListener('keydown', closeByEscape);  
      return () => {  
        document.removeEventListener('keydown', closeByEscape);  
      }  

  }, []) 

  return ReactDOM.createPortal(
    <div>
`      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <CloseIcon type="primary"  />
        </button>
        {children}
      </div>
      <ModalOverlay onClose={onClose}/>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Modal;