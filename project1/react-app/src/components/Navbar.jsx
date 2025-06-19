import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-[45px] bg-gray-900 text-amber-50">
        <p className="text-4xl">Product Page</p>
        <ul className="flex text-2xl items-center gap-3.5 justify-around">
          <li>Home</li>
          <li>About</li>
          <li>Features</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
