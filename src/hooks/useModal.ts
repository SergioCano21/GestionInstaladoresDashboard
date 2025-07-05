import { useEffect, useState } from 'react';
import type { ModalType } from '../types/types';

export function useModal() {
  const [modal, setModal] = useState<ModalType>(null);

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : 'auto';
  }, [modal]);

  const openModal = (modal: string) => setModal(modal);

  const closeModal = () => setModal(null);

  return {
    modal,
    openModal,
    closeModal,
  };
}
