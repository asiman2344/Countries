import './component.css'
// import axios from 'axios'
import { useState } from 'react'

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

}

function showCountries() {
    const [countries, setCountries] = useState<Country[]>([]);

    return (
        <div className="showCountries">
            <div className="cardWrapper">
                <h1>asdf</h1>
            </div>
        </div>
    )
}

export default showCountries
