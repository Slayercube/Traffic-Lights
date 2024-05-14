import React, { useEffect, useState } from "react";

export const TrafficLight = () => {
  const [select , setSelected] = useState("class1 color-red");
  //const handleSelected = color => setSelected(color);
  const [showPurple, setShowPurple] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if(select === "class1 color-red"){
        setSelected("class1 color-green");
      }else if(select === "class1 color-green"){
        setSelected("class1 color-yellow");
      }else if(select === "class1 color-yellow" && showPurple){
        setSelected("class1 color-purple");
      }else{
        setSelected("class1 color-red");
      }
    }, 500);
    return () => clearInterval(interval);
  }, [select, showPurple]
  );
  
  return (
    <div className="container"> 
      <div className={ `${select === "class1 color-red" ? "class1 redselected" : ""} class1 color-red`} onClick={()=> handleSelected("class1 color-red")}>
      </div>
      <div className={ `${select === "class1 color-green" ? "class1 greenselected" : ""} class1 color-green`} onClick={()=> handleSelected("class1 color-green")}></div>
      <div className={ `${select === "class1 color-yellow" ? "class1 yellowselected" : ""} class1 color-yellow`} onClick={()=> handleSelected("class1 color-yellow")}></div>
      {showPurple && <div className={ `${select === "class1 color-purple" ? "class1 purpleselected" : ""} class1 color-purple`} onClick={()=> setSelected("class1 color-purple")}></div>}
      <button onClick={()=> setShowPurple(!showPurple)}>{showPurple ? "close" : "open"}</button>
    </div>
  )
};