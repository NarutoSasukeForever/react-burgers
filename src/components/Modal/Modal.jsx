import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css';
import ModalOverlay from './ModalOverlay';
import { CloseIcon  } from '@ya.praktikum/react-developer-burger-ui-components'

const Modal = ({ isOpen, onClose, children }) => {
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
  
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalOverlay onClose={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <CloseIcon type="primary"  />
        </button>
        {children}
      </div>
    </ModalOverlay>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Modal;