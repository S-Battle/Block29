import React from  "react";



const PuppyButtons = ({id, changeView, pupCount, backToHome, deletePup, clearSearch}) => {

    const handleView = ()=>{
        console.log("THE ID IS: ", id);
        changeView(id);
    }

    const handleDelete = ()=>{
        console.log("IN PROGRESS");
       deletePup(id);
          
    }

    const handleBack = ()=>{
        console.log("HELLO ARE WE GETTING HERE");
        backToHome();
        
    }

          return(
                             <>
                             <div className="textHolderButtons">
                                
                                 {pupCount ===1 && <button onClick={handleBack} >Back</button>}                                 
                                 {pupCount > 1 &&   <button onClick={handleView}>View</button> }
                                 {pupCount > 1 &&    <button onClick={handleDelete}>Delete</button>}
                                </div>

                             </>
          );

}



export default PuppyButtons;