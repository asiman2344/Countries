import React, { use } from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

type Country = {
  name: {
    common: string
  },
  ccn3: string,
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

function countriesCard() {
  const { code } = useParams<{ code: string }>()
  const [country, setCountry] = useState<Country[]>([]);

  const getCountry = async () => {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
    setCountry(response.data)
  }

  useEffect(() => {
    getCountry()
  }, [])

  useEffect(() => {
    console.log(country);

  }, [country])

  return (
    <div className='countryCard'>
      <div className="cardAbout">
        <div className='cardTitle'>
          <h1>{country[0]?.name?.common}</h1>
        </div>
        <div className="cardContent">
          <div className='cardImg'>
            <img src={country[0]?.flags?.png} alt="" />
          </div>
          <div className="cardInfo">
            <h1>Capital: {country[0]?.capital[0]}</h1>
            <h1>Region: {country[0]?.region}</h1>
            <h1>Population: {country[0]?.population}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default countriesCard
