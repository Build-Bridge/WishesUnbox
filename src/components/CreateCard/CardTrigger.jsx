import { useContext } from "react";
import { ModalContext } from "./CreateCard";

export const CardTrigger = () => {
    const { setIsOpen} = useContext(ModalContext);
  return (
    <div className="w-lg p-5">
      <button onClick={() => setIsOpen(true)} className="bg-[#ff9a55] w-lg p-5 rounded-full text-white capitalize text-2xl font-bold my-10 outline-none transition-all flex items-center justify-center shadow-sm">
        Create
      </button>
    </div>
  );
};