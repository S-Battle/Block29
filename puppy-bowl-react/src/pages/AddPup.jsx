import React from  "react";
import NewPupForm from "../components/NewPupForm";

let pupObj = {
              name: "",
              breed: "",
              status: "",
              imageUrl: "",
              teamId: "",
       };




const AddPup = () => {



       


       const handleAddPup = (() =>{

              // const addNewPup = async (pupObj) => {
              //        console.log(playerObj);
              //        try {
              //          const response = await fetch(`${API_URL}/players`, {
              //            method: "POST",
              //            headers: { "Content-Type": "application/json" },
              //            body: JSON.stringify(pupObj),
              //          });
              //          const newPupJson = await response.json();
              //          if (newPupJson.error) {
              //            throw new Error(newPupJson.error.message);
              //          }
              //        } catch (err) {
              //          console.error("Oops, something went wrong with adding that pup!", err);
              //          console.log(err);
              //        }
              // };              
       })





          return(
                             <>
                             <NewPupForm
                             

                             
                             />
                                    
                             </>
          );

}



export default AddPup;