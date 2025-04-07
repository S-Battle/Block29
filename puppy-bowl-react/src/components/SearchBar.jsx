import React from  "react";



const SearchBar = ({nameSearch,  pupCount, backToHome}) => {

    const handleChange = ((event)=>{

        nameSearch(event, pupCount);
       

    })
    const clearSearch =((e)=>{
        if(pupCount === 1){
        e.target.value = "";   
        }
    })


          return(
                             <><div className="searchDiv">
                                <label htmlFor="searchBar">SEARCH BY NAME</label><input id="searchBar" name="searchBar" onBlur={(e)=>{clearSearch(e)}} onChange={(event)=>{handleChange(event)}}></input>
                             </div></>
          );

}



export default SearchBar;