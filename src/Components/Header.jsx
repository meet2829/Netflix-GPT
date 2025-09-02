import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeuser } from "../utils/UserSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const user = useSelector((state) => state.user);

  const handleSignOut = async () => {
    try {
      await signOut(auth); 
      dispatch(removeuser()); 
      navigate("/"); 
    } catch (error) {
      console.error("Sign out error:", error.message);
    }
  };
  return (
    <div>
      <img className='absolute  w-48'
       src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
        <div className="flex justify-end items-center p-4 text-white bg-gradient-to-b from-black">
      {user && (
        <div className="flex items-center space-x-4 py-4">
          <span className="text-gray-300">{user.email}</span>
          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-semibold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
    </div>
  )
}
export default Header
