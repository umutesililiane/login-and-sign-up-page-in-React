import { useState } from "react";

function Example1() {
  const [name, setName] = useState("Lily");
  //const [form,setForm] = usestate("");
  const changeName = () => {
    setName("Umutesi");
  };

  return (
    <div className="container" >
      <p>My name is {name}</p>
      <button onClick={changeName}> Click here </button>
     
    </div>
  );
}

export default Example1;