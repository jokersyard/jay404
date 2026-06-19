'use client';

import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState({});

  const openModal = (modalId) => {
    setModals(prev => ({ ...prev, [modalId]: true }));
  };

  const closeModal = (modalId) => {
    setModals(prev => ({ ...prev, [modalId]: false }));
  };

  const isOpen = (modalId) => modals[modalId] || false;

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
};
