"use client";
import CloseAside from "@/components/organisms/CloseAside";
import OpenAside from "@/components/organisms/OpenAside";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import Button from "../atoms/Button";

export default function Sidebar() {
  const [isToggle, setIsToggle] = useState(false);
  const toggleHandler = () => {
    setIsToggle((pev) => !pev);
  };

  return (
    <div className="sidebar-wrapper ">
      {/* Toggle-collapsible-button menu icon-button */}
      <Button
        type="button"
        label={isToggle ? <IoMdClose /> : <RiMenu2Fill />}
        classes="collapsible-button text-[2rem] fixed left-[2%] top-4 z-50 text-rose-500 outline-none border-0 transition duration-200 ease-out hover:ease-in hidden lg:block "
        onClick={toggleHandler}
      />
      {isToggle ? <OpenAside /> : <CloseAside />}
    </div>
  );
}
