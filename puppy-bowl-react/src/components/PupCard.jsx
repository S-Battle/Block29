import React from  "react";
import PuppyButtons from "./PuppyButtons";



const PupCard = ({pupId, pupName, pupBreed, pupStatus, pupImg, pupTeam, changeView, pupCount, backToHome, deletePup}) => {
            let pupCard = "pupCard";
            let pupCardImageHolder = "pupCardImageHolder";
            let textHolder = "textHolder";

            let myStyle = {

               width: '100%)',
               height: '80vh',
               fontSize: 'small',
               border: 'solid black 1px',
               display: 'flex',  
               borderRadius: '2rem',
               backgroundColor: 'rgb(73, 73, 73)',
               overflow: 'auto',


            }
            if (pupCount  === 1){
               pupCard = 'pupCardBig';
               pupCardImageHolder = "pupCardImageHolderBig";
               textHolder = "textHolderBig";  
               
               
               myStyle = {
               width: 'calc(50% - 2px)',
               height: '33vh',
               fontSize: 'small',
               border: 'solid black 1px',
               display: 'flex',  
               borderRadius: '2rem',
               backgroundColor: 'rgb(73, 73, 73)',
               overflow: 'auto',
            }
            console.log(pupImg);            
         }

        



          return(
                             <div className={pupCard} >
                              <div className={pupCardImageHolder}><img src={pupImg} alt="Picture of a puppy" /></div>
                              <div className={textHolder}>
                                <div>{"ID: " +pupId}</div>
                                <div>{"NAME: " + pupName}</div>
                                <div>{"BREED: " + pupBreed}</div>
                                <div>{"STATUS: " + pupStatus}</div>
                                <div>{"TEAM: " + pupTeam}</div>
                                <PuppyButtons id={pupId} changeView={changeView} pupCount={pupCount} backToHome={backToHome} deletePup={deletePup}/>
                                </div>
                                
                             </div>
          );

}



export default PupCard;