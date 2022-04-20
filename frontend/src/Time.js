import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
// import React from "@types/react";

const Time = () => {
    const [count, setCount] = useState(0);
    const [test, setTest] = useState(0);
    const [countries, setCountry] = useState(0);

    const getUsers = async () => {
        await axios.get('https://gorest.co.in/public/v2/users')
            .then((response) => {
                setCountry(response.data)

            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getUsers()
    }, test);  //Runs only on the first render
   const testing =()=>{
       setTest(test+1);
       console.log(countries);
    }


    return (
        <div>
            <button onClick={testing}> this is the button</button>
            <h1>I've rendered {count} times!</h1>
            <ul>
                {countries.length > 0 && countries.map((country, index) => {
                    return (
                        <li key={index}>
                            <a href={`https://restcountries.eu/rest/v2/name/${country.name}`}>{country.name}</a>
                        </li>
                    )
                }

                )}
            </ul>
        </div>



    )
}

export default Time;
