import React, { useState, useEffect } from 'react'
import Element1 from './Element1';
import Element2 from './Element2';
import Element3 from './Element3';


const Container = () => {

  const [element, setElement] = useState(1);

  const handleClick = () => {
    if (element == 1) {
      setElement(2)
    } else if (element == 2) {
      setElement(3)
    } else if (element == 3) {
      setElement(1)
    }
  }

  if (element == 1) {
    return (
      <>
        <button onClick={handleClick}>Change State</button>
        <Element1 />
      </>
    )
  } else if (element == 2) {
    return (
      <>
        <button onClick={handleClick}>Change State</button>
        <Element2 />
      </>
    )    
  } else if (element == 3) {
    return (
      <>
        <button onClick={handleClick}>Change State</button>
        <Element3 />
      </>
    )
  }
  
}

export default Container;