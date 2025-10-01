import React from "react";
import { NavLink } from "react-router";


const Header = () => {
  return (
    <div>
      <h3 className='text-2xl font-bold'>This is header</h3>
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
        <NavLink to="/User">User</NavLink>
        <NavLink to="/User2">User-2</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/albums">Albums</NavLink>
      </nav>
    </div>
  );
};

export default Header;
