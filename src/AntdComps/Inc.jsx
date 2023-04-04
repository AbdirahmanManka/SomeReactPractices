import { Button } from "antd";
import React, { useState } from "react";


export default function GrowingButton() {
  const [height, setWidth] = useState(50);

  // call setWidth with functional update
  const increaseWidth = () => setWidth((previousWidth) => previousWidth + 10);

  return (
    <>
      <h1>Click the button below to see if grow:</h1>
       <p>The time is {new Date().toLocaleTimeString()}</p>
      
      <Button type="primary" style={{ height }} onClick={increaseWidth} >Grow Me</Button>
    </>
  );
}
