"use client";
import * as ReactDOM from 'react-dom';
import React from 'react';
import styles from './styles.module.scss';
import PopupProps from './types';
import XmarkIcon from "../../assets/xmark.svg";

// Universal Popup Component
const Modal = ({ children, title, onClose, show }: PopupProps) => {
    if (!show) {
        return null;
    }

    return ReactDOM.createPortal(
        <div onClick={onClose} className={styles.wrapper}>
            <div onClick={(e) => e.stopPropagation()} className={styles.popup}>
                <div className={styles.popup__header}>
                    <h5>{title}</h5>
                    <button onClick={onClose}>
                        <XmarkIcon className={styles.xmark} width={25} height={25} />
                    </button>
                </div>

                <div className={styles.popup__body}>
                    {children}
                </div>
            </div>
        </div>,
        document.body 
    );
};

export default Modal;
