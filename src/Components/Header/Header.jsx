import React from "react";
import { Link,NavLink } from "react-router";


const Header = () => {
  return (
    <div>
      <h3 className='text-2xl font-bold'Nav>This is header</h3>
      {/* <nav>
        <a href="/">Home</a>
        <a href="/Mobiles">Mobiles</a>
        <a href="/Laptop">Laptops</a>
        <a href=""></a>
      </nav> */}

      <nav className="border-1 border-blue bg-blue-400 text-white p-4 flex justify-around my-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Mobiles">Mobiles</NavLink>
        <NavLink to="/Laptop">Laptops</NavLink>
      </nav>
    </div>
  );
};

export default Header;
