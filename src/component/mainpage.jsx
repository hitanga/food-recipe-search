import React, { useState, useEffect } from 'react';
import Mealcards from './mealcards';
import logo from "../assets/food-recipe.svg";

const Mainpage = () => {
    const [data, setData] = useState(() => {
        return JSON.parse(localStorage.getItem('meals')) || null;
    });
    const [search, setSearch] = useState(() => {
        return localStorage.getItem('search') || "";
    });
    const [msg, setMsg] = useState("");

    const handleInput = (event) => {
        setSearch(event.target.value);
    };

    const foodapi = async () => {
        if (search.trim() === "") {
            setMsg("Please enter something");
        } else {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
                const jsonData = await response.json();
                
                setData(jsonData.meals);
                setMsg("");

                localStorage.setItem('meals', JSON.stringify(jsonData.meals));
                localStorage.setItem('search', search);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    };

    useEffect(() => {
        const storedMeals = localStorage.getItem('meals');
        const storedSearch = localStorage.getItem('search');
        
        if (storedMeals) setData(JSON.parse(storedMeals));
        if (storedSearch) setSearch(storedSearch);
    }, []);

    return (
        <div className='container'>
            <div class="logo-section">
                <h1><img src={logo} alt='Logo' className='logo'/> Food Recipe Search App</h1>
            </div>
            
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
                <Mealcards detail={data} />
            </div>
        </div>
    );
};

export default Mainpage;
