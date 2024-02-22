import React from "react";
import { FaPlusCircle, FaStar, FaHeart } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

/* 

position: absolute;
width: 32px;
height: 30px;
left: 219px;
top: 253px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 30px;

color: #000000;

*/

/* <FaPlusCircle /> */
function DashboardCard() {
  return (
    <div className="w-full md:max-w-[279px] max-h-[313px] h-[42vh] items-center justify-center p-12 rounded-sm border-[1px] border-black grid grid-rows-12 gap-6">
      <div className="border-[1px] relative border-black row-start-2 row-end-10 w-full max-w-[222px] h-full max-h-[160]">
        <button className="absolute right-3 top-3 text-3xl bg-orange-400 text-white w-11 flex items-center justify-center rounded-full h-11">
          <CiEdit />
          <span className="fixed -left-[300000000000000px]">Edit</span>
        </button>
      </div>
      <div className="w-[222px] h-full row-start-10 row-end-13 text-3xl flex justify-between items-center">
        <button className="text-[rgb(255,5,9)]">
          <span className="fixed -left-[30000000000000000000px]">Like</span>
          <FaHeart />
        </button>
        <button className="text-[#FFC700] flex items-center h-full justify-center gap-2">
          <FaStar />
          <span className="fixed -left-[30000000000000000000px]">Add to favourite</span>
          <span className="text-black text-2xl font-bold">(5)</span>
        </button>
      </div>
    </div>
  );
}

export default function DashboardCardList() {
  return (
    <div className="flex items-center w-full h-full flex-col p-8 py-">
      {/* <div className="max-w-[1050px] w-full gap-6 flex flex-wrap flex-grow justify-start p-8 items-center overflow-y-auto"> */}
      <div className="max-w-[900px] lg:max-w-[950px] grid gap-8 p-8 py-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-cols w-full flex-grow bg-[#FFF7F1]">
        {new Array(70).fill().map(() => (
          <DashboardCard key={Math.random()} />
        ))}
      </div>
    </div>
  );
}
