import React from "react";


function newPicture(props){

   return(
       <div className = "card">
            <img className = "picture"
            src={props.image} 
            alt={props.name}
            onClick={()=> props.handleClick(props.id)}
            />
       </div>
   );
};

export default newPicture;