import React from 'react';
import './component.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

type Country = {
    name: {
        common: string
    },
    ccn3: string,
    cca3: string,
    capital: string[],
    region: string,
    languages: {
        [key: string]: string
    },
    area: number,
    flags: {
        png: string,
        svg: string
    },
    population: number,
}

function showCountries() {
    const [countries, setCountries] = useState<Country[]>([]);
    const navigate = useNavigate();

    const handleData = async () => {
        const res = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(res.data);
    }

    useEffect(() => {
        handleData();
    }, []);

    useEffect(() => {
        if (countries.length > 0) {
            // console.log(countries[0].name.common);
        }
    }, [countries]);

    const navigateCard = (cca3: string) => {
        navigate(`/country/${cca3}`);
    }

    return (

        <div className="showCountries">
            <div className="navbar">
                <div className='navbarContainer'>
                    <div className='navbarTitle'>
                        <h1>Countries</h1>
                    </div>
                    <div>
                        <Link to='/'><input type="text" placeholder='Search for a country...' className='searchInput' /></Link>
                    </div>
                    <div>
                        <select name="" id="">
                            <option value="Filter by Region">Filter by Region</option>
                            <option value="All">All</option>
                            <option value="Africa">Africa</option>
                            <option value="America">America</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="cardWrapper">
                {
                    countries.map(country => (
                        <div onClick={() => navigateCard(country.ccn3)} className="card border border-gray-300 rounded-b-md" key={Number(country.cca3)}>
                            <div className='flag w-full h-[200px] border border-gray-200 '>
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