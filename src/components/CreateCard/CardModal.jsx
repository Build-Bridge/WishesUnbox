import { useContext } from "react";
import { ModalContext } from "./CreateCard";

export const CardModal = () => {
    const { isOpen, handleClose } = useContext(ModalContext);

    if(!isOpen) return null
   return (
     <div className="fixed inset-0 bg-[#eeeeee] bg-opacity-25 backdrop-blur-md z-[99999] flex justify-center items-center">
        <div className="w-[80%] p-5 sm:max-w-[600px] transition-all bg-white shadow-lg rounded-lg">
    <form action="">
        <h1 className="text-3xl font-bold font-sans text-[#ff9a55] text-center">Create A WishCard</h1>
        <div className="flex flex-col gap-y-5 p-2 mt-10">
    <input type="text" placeholder="Name of Reciever"  className="bg-zinc-100 p-5 rounded-sm"/>
    <div>
        
    </div>
    <label htmlFor="type" classsName="text-lg text-slate-500 font-sans font-semibold">Type of Card</label>
    <select name="" id="type" className="bg-zinc-100 p-5 text-slate-400 rounded">
        <option value="Birthday">Birthday</option>
        <option value="christmas">Christmas</option>
        <option value="Valentine">Valentine</option>
        <option value="Graudation">Graudation</option>
        <option value="Newyear">New year</option>
        <option value="Thanksgiving">Thanksgiving</option>
    </select>
    <textarea type="text" placeholder="Additional Message" className="bg-zinc-100 min-h-12 max-h-48 p-3 rounded-sm"/>
        </div>
    </form>
       <div className="flex p-5 justify-evenly">

       <button className="px-5 py-2 text-xl rounded bg-white hover:shadow border border-[#ff9a55] text-[#959595]" onClick={handleClose}>Cancel</button>
       <button className="px-5 py-2 text-xl rounded bg-[#ff9a55] text-white shadow-sm" onClick={handleClose}>Create</button>
       </div>
        </div>
     </div>
   );
 };