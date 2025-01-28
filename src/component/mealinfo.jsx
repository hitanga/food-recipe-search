import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from './backbutton';

const Mealinfo = () => {
    const { mealid } = useParams();
    const [info, setInfo] = useState();

    useEffect(() => {
        const getInfo = async () => {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
                const jsonData = await get.json();
                console.log(jsonData.meals[0]);
                setInfo(jsonData.meals[0]);
        };

        if (info != "") {
            getInfo();
        }
    }, [info]);

   // console.log("Meal info state:", info);

    return (
        <div className='container'>
            <h1>Receipe Details</h1>

            <div className='back'>
                <BackButton/>
            </div>
            {!info ? "Data Not Found" :
                <div className='meailInfo'>
                    <img src={info.strMealThumb} alt=''/>
                    <div className='info'>
                        <h2>{info.strMeal}</h2>
                        <h4>Instructions</h4>
                        <p>{info.strInstructions}</p>
                    </div>
                </div>
            }
        </div>
    )
};

export default Mealinfo;
