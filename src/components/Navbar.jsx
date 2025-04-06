import React from "react";
import logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/setup";
import { signOut } from "firebase/auth";

const Navbar = (props) => {

  const navigate = useNavigate()

  const logout = async() =>{
    try{
      await signOut(auth)
      navigate("/")
    } catch(error){
      console.error(error)
    }
  }

  return (
    <div className="grid grid-cols-3 bg-black text-white fixed">
      <div className="flex h-14 items-center p-5">
        <img src={logo} className="h-9" />

        {
          auth.currentUser ? 
          <button onClick={logout} className="text-white flex hover:border border-white p-2 w-48 m-2">
            Logout
          </button>
          : <Link to="/signin">
          <button className="text-white flex hover:border border-white p-2 w-48 m-2">
            <span class="material-symbols-outlined ml-3 mr-2">
              account_circle
            </span>
            Sign In
          </button>
        </Link>
          
        }
  
      </div>

      <div className="flex justify-around">
        <button onClick={()=>props.setMenu("everything")} className="ml-7 font-semibold text-sm">Home</button>
        <button onClick={()=>props.setMenu("Science")} className="ml-7 font-semibold text-sm">Science</button>
        <button onClick={()=>props.setMenu("Movies")} className="ml-7 font-semibold text-sm">Movies</button>
        <button onClick={() => props.setMenu("Food")} className="ml-7 font-semibold text-sm">Food</button>
        <button onClick={() => props.setMenu("Worklife")} className="ml-7 font-semibold text-sm">Worklife</button>
        <button onClick={() => props.setMenu("Travel")} className="ml-7 font-semibold text-sm">Travel</button>
        <button onClick={() => props.setMenu("Future")} className="ml-7 font-semibold text-sm">Future</button>
        <button onClick={() => props.setMenu("Culture")} className="ml-7 font-semibold text-sm">Culture</button>
      </div>

      <div className="ml-60 flex p-4">
        <span className="material-symbols-outlined mr-2">search</span>
        <input onChange={(e)=>props.setSearch(e.target.value)} className="flex bg-black" placeholder="Search BBC"/>
      </div>
    </div>
  );
};

export default Navbar;
