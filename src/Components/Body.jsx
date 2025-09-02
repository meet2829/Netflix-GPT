import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";
import { adduser, removeuser } from "../utils/UserSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        console.log(" User Logged In:", user);
        dispatch(adduser({ uid, email, displayName }));
        navigate("/browse", { replace: true });
      } else {
        console.log(" No user found, redirecting to login");
        dispatch(removeUser());
        navigate("/", { replace: true });
      }
    });

    
  }, []);

  return null;
};

export default Body;
