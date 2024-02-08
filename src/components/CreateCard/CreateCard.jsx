import React, { createContext, useState } from "react";
import { CardTrigger } from "./CardTrigger";
import { CardModal } from "./CardModal";

export const ModalContext = createContext(null);
const CreateCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      <div>
        <CardTrigger />
        <CardModal />
      </div>
    </ModalContext.Provider>
  );
};

export default CreateCard;
