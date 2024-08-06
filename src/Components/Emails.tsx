import React, { useState } from "react";
import Email from "./Email";

interface iface {
  name: string;
}
const Emails = () => {
  const [name, setName ] = useState<string>("");
  const [nameList ,setNameList]=useState<string[]>([])

  const handleClick = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   const target =e.target as typeof e.target &{
    owner:{value :string}
  
   }
   
    const newName =target.owner.value
   setNameList([...nameList,newName])
   
   setName(""); // Resets the input field
 
  };
 
  const handleRemove =(email:string)=>{
    const newList =nameList.filter((n)=>n !== email)
    setNameList(newList)
    

  }
  console.log(name,'name');
  console.log(nameList,'list')

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "green", fontSize: "60px" }}>To Do List </h1>
      <form onSubmit={handleClick}>
        <input type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
         name="owner" placeholder="submit your name" />
        <button>Add</button>
      </form>
      {
        nameList?.map((name,i)=><Email key={i} i={i} email={name} handleRemove={handleRemove}></Email>)
      }
    </div>
  );
};

export default Emails;
