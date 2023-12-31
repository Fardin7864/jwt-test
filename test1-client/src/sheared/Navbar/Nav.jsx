import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { Authcontext } from '../../providers/Authprovider/Authprovider';


const Nav = () => {
  const {logOut,user} = useContext(Authcontext)
    const navlink =
    <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/users'>Users</NavLink></li>
    </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navlink}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Jwt test1</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navlink}
        </ul>
      </div>
      <div className="navbar-end">
        {user? <button onClick={logOut} className='btn btn-warning'>SignOut</button> : <Link to='/login' className="btn btn-warning">Login</Link>}        
      </div>
    </div>
  );
};

export default Nav;
