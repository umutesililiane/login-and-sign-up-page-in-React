import { useState } from "react";

function Example2() {
  const [name, setName] = useState("Lily");
 
 // const changeMe = () => {
   // setName("Umutesi");
  //};

  return (
    <div className="container" >
    
      <button onClick={() => setName(name)}> Click here {name}</button>
     
    </div>
  );
}

export default Example2;