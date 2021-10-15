import React from "react";

export default function HelloWorld({name, message}) {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>{message}</p>
    </div>
    
  );
}