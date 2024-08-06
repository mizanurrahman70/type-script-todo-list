import React from 'react';

interface Iprops{
    i:number
    email:string
    handleRemove:(email:string)=>void
}

const Email = ({email,handleRemove,i}:Iprops) => {
    return (
        <div style={{}}>
            <h1>{i+1}</h1>
            <h1 onClick={()=>handleRemove(email)}>{email}</h1>
        </div>
    );
};

export default Email;