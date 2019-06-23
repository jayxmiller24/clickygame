import React from "react";


function Wrapper(props) {
  return (
    
    <div className="row">{props.children}</div>
  )
}

export default Wrapper;