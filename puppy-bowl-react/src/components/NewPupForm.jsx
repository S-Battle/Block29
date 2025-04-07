import React, { useState } from  "react";



const NewPupForm = () => {
    const [pupValues, setPupValues] = useState({
            name: "",
            breed: "",
            status: "",
            imageUrl: "",
            teamId: ""
    })

        const handleForm = ((inputType, event)=>{

            setPupValues((prev)=>({
                ...prev,
                [inputType]: event.target.value                
            }))
        })



        const handleSubmit =(event)=>{
            event.preventDefault();
            console.log(pupValues);
            const addNewPup = async () => {


               
                if(pupValues.name === "" ){
                    alert("PLEASE ENTER A PUP NAME")
                    return 
                }
                if(pupValues.breed === ""){
                    alert("PLEASE ENTER A PUP BREED")
                    return 
                }
                if(pupValues.status !== "field" && pupValues.status !== 'bench'){
                    alert("PLEASE ENTER FIELD OR BENCH FOR STATUS")
                    return 
                }                
                if(pupValues.imageUrl === ""){
                    alert("PLEASE ENTER IMAGE URL FOR PUP")
                    return 
                }
                if(pupValues.teamId === "" || Number(pupValues.teamId) === NaN){
                    alert("PLEASE ENTER A TEAM NUMBER FOR PUP")
                    console.log(pupValues.teamId)
                    return
                }




                try {
                  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-MT-WEB-PT/players`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(pupValues),
                   
                  });
                  const newPupJson = await response.json();
                  if (newPupJson.error) {
                    throw new Error(newPupJson.error.message);
                  }
                } catch (err) {
                    alert(err);
                  console.error("Oops, something went wrong with adding that pup!", err);
                  console.log(err);
                }                
            };       
                addNewPup()
        }



          return(
                             <>                             
                              <form className="pupForm" >
                                
                                <label>NAME: <br/>
                                        <input 
                                        type="text" 
                                        name="name" 
                                        onChange={(event)=>{
                                           handleForm("name", event);
                                        }} 
                                        //value={pupValues}
                                        /><br/>
                                </label>

                                <label>BREED: <br/>
                                <input 
                                        type="text"
                                        name="breed" 
                                        onChange={(event)=>{
                                            handleForm("breed", event);
                                         }} 
                                        /> <br/>
                                 </label>


                                <label>STATUS: <br/>
                                <input 
                                        type="text" 
                                        name="status"  
                                        onChange={(event)=>{
                                            handleForm("status", event);
                                         }} 
                                        /><br/>
                                </label>


                                <label>IMAGE URL: <br/>
                                <input 
                                        type="url" 
                                        name="imgUrl" 
                                        onChange={(event)=>{
                                            handleForm("imageUrl", event);
                                         }} 
                                        /><br/>
                                </label>


                                <label >TEAM ID: <br/>
                                <input 
                                        type="number" 
                                        name="teamId" 
                                        onChange={(event)=>{
                                            handleForm("teamId", event);
                                         }} 
                                        /> <br/>                              
                                </label>


                                <input type="submit" onClick={(event)=>{handleSubmit(event)}} value="ADD PUP" />
                                </form> 
                             </>
          );

};



export default NewPupForm;