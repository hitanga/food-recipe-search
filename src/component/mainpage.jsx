import React, { useState } from 'react'
import Mealcards from './mealcards';

const Mainpage = () => {
    const [data, setData] = useState();
    const [search, setSearch] = useState(""); 
    const [msg, setMsg] = useState("");

    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    const foodapi = async () => {
        if(search == "") {
            setMsg("Please enter something")
        } else {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await get.json();
            setData(jsonData.meals);
            setMsg("");
        }
        
    };

    //console.log(data);
    //console.log(msg);

    return (
        <>
            <div className='container'>
                <h1>Food Recipe Search App</h1>
                <div className='searchbar'>
                    <input 
                        type='text' 
                        className='form-control search-input'
                        placeholder='Enter Dish' 
                        onChange={handleInput}
                        value={search} 
                    />
                    <button type='button' className='btn btn-primary' onClick={foodapi}>Search</button>
                </div>
                <h4>{msg}</h4>
                <div className='mealdiv'>   
                    <Mealcards detail={data}/>
                </div>
            </div>
        </>
    )
}

export default Mainpage