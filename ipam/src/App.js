import React from "react";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { getStates } from "./features/getSlice";




export function App() {

  const apiStates = useSelector(getStates)
  console.log(getStates)
  return (
    <div>IPAM</div>
    
  
  );
}


