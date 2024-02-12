import close from "/close.svg";
import menu from "/menu.svg";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";

const Top = () => {
  return (
    <div>
        {navLinks.map((lil) => {
            <a href={`/#${lil.id}`}></a>
        })}
    </div>
  )
}

export default Top