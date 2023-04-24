// Lab question 1
// Create a component that forwards a ref to a child component and logs the child component's props when it is clicked.

import React, { forwardRef, useRef } from 'react'

const ChildRef = forwardRef((props, ref) => {
    return <input ref={ref} type={props.type} />;
});

const Lab1ForwardRef = () => {
    const ref1 = useRef(null);

    const handleClick1 = () => {
        console.log(ref1.current);
    }

  return (
    <>
        <ChildRef ref={ref1} type="text" />
        <button onClick={handleClick1}>check log</button>
    </>
  )
}

export default Lab1ForwardRef;