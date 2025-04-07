import React, {useState, useEffect} from "react";
import PupCard from "../components/PupCard";
import SearchBar from "../components/SearchBar";




const StartPage = () => {  
    const [puppies, setPuppies] = useState( [] );
    
    
    
    

        const changeView = ((puppyNumber) =>{

            const singlePups = async ()=>{
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-MT-WEB-PT/players/${puppyNumber}`);                      
                const result = await response.json()
               // console.log(result.data.player);
                const {data} = result;
                const {player} = data;  
                console.log(player);
                setPuppies( (arry)=> {    
                    let newArray = [];
                    newArray.push(player);
                    console.log("new Array: " , newArray)
                    return  newArray;                 
                });                   
            }
            singlePups();
        })



        const deletePup = ((identity)=>{

            const removePlayer = async () => {
                console.log("id is: ", identity)
                try {
                  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-MT-WEB-PT/players/${identity}`, {
                    method: "DELETE",
                  }
                  
                );
                setPuppies(puppies.filter((puppy, index) => puppy.id !== identity));
                } 
                catch (err) {
                  console.error(
                    `Whoops, trouble removing player #${identity} from the roster!`,
                    err
                  );
                }
              };
               removePlayer();
        })


        const backToHome = () => {
            const allPups = async ()=>{
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-MT-WEB-PT/players`);                      
                const result = await response.json()
                console.log(result.data.players);
                const {data} = await  result;
                const {players} = await data;  
                console.log(players);
                setPuppies( ()=> {                    
                    return  players                  
                });                   
            }
            allPups();
        }

        
        useEffect( ()=>{            

            const allPups = async ()=>{
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-MT-WEB-PT/players`);                      
                const result = await response.json();              
                const {data} = result;
                const {players} = data;                 
                setPuppies( (arry)=> {                    
                    return  [...players]                  
                });                   
            }           
                allPups();          
            }, []);       

            const nameSearch = ((event, pupCount)=>{

                let searchCriteria = event.target.value;
                console.log(searchCriteria);

                   

                setPuppies((prev)=>{
                    let puppiesFound = [];


                   
                        puppiesFound = puppies.filter((puppy) => String(puppy.name).toLowerCase() === String(searchCriteria).toLowerCase())

                    if (puppiesFound.length > 0){
                        return [...puppiesFound]
                    }
                    else{
                        return [...prev]
                    }
                })
                    
            
                    
                })

           
    



          return(

                                <>
                                <SearchBar 
                                nameSearch={nameSearch}                               
                                pupCount = {puppies.length}
                                backToHome={backToHome}
                                />
                                <div className="pupViewer"  >                               
                                {puppies.map((pups, pupKey)=>{
                                    return <PupCard 
                                    key={pupKey}
                                    pupId={pups.id}
                                    pupName={pups.name}
                                    pupBreed={pups.breed}
                                    pupStatus={pups.status}
                                    pupImg={pups.imageUrl}
                                    pupTeam={pups.teamId}
                                    changeView={changeView}
                                    pupCount={puppies.length}
                                    backToHome={backToHome}
                                    deletePup={deletePup}
                                    
                                    />
                                })}
                             </div>
                             </>
          );

};



export default StartPage;