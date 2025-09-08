
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeuser } from "../utils/UserSlice";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/Constant";
import { ToggleGptSearchView } from "../utils/GPTslice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const user = useSelector((state) => state.user);  
  const HandleToggelGPTSearch=()=>{
    dispatch(ToggleGptSearchView())
  }
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
    <div className="bg-gradient-to-t  via-transparent to-black relative z-30">
      <img className='absolute  w-48'
       src={LOGO} alt="" />
        <div className="flex justify-end items-center p-4 text-white">
      {user && (
        
        <div className="flex items-center space-x-4 py-4">
         
          <button className="bg-gradient-to-b rounded-2xl  via-transparent to-black p-2 m-3" onClick={HandleToggelGPTSearch}>🔍 Search GPT</button>
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
