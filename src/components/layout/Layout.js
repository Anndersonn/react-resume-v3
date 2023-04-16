import React from "react";

const Layout = ({ children, classname }) => {
  return (
    <div className={`w-full h-full bg-light inline-block p-32 ${classname}`}>
      {children}
    </div>
  );
};

export default Layout;
