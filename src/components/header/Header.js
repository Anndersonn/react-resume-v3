import React from "react";
import Logo from "./layout/Logo";
import NavLinks from "./layout/NavLinks";
import ContactLinks from "./layout/ContactLinks";

const Header = () => {
  return (
    <div className="w-full px-32 py-8 font-medium flex items-center justify-between ">
      <NavLinks />
      <div className="absolute left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
      <ContactLinks />
    </div>
  );
};

export default Header;
