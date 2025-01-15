import React from 'react';
import PopupProps from './types';
declare const Modal: ({ children, title, onClose, show }: PopupProps) => React.ReactPortal | null;
export default Modal;
