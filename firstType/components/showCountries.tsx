import React from 'react';
import './component.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

type Country = {
    name:{
        common:string
    },
    cca2:string,
    capital:string[],
    region:string, 
    languages:{
        [key:string]:string
    },
    area:number,
    flags:{
        png:string,
        svg:string
    },
    population:number,
}

function showCountries() {
    const [countries, setCountries] = useState<Country[]>([]);

    const handleData = async () => {
        const res = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(res.data);
    }

    useEffect(() => {
        handleData();  
    }, []);

    useEffect(() => {
        if (countries.length > 0) {
            console.log(countries[0].name.common);
        }
    }, [countries]);

    return (
    
        <div className="showCountries">
            <div className="cardWrapper">
                {
                    countries.map(country=>(
                        <div className="card border border-gray-200 rounded-b-md" key={country.cca2}>
                            <div className='flag w-full h-[200px]'>
                                <img className='w-full h-full object-cover' src={country?.flags.png} alt="" />
                            </div>
                            <div className='countryInfo'>
                                <div className='countryName'><h1 className='text-2xl font-medium'>{country?.name?.common}</h1></div>
                                <div className='countryPop'><span className='text-16px font-medium'>Population: {country?.population}</span></div>
                                <div className='countryReg text-16px font-medium'>Region: {country?.region}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default showCountries