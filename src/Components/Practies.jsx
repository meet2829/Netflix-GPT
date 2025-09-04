import React, { useRef } from "react";

function Practies() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); 
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
export default Practies;
