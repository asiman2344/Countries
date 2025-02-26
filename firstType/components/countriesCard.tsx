import React from 'react'
import { useParams } from 'react-router-dom'

function countriesCard() {
    const { code } = useParams<{ code: string }>()
    console.log(code);
    
  return (
    <div>
      <h1>kkajdjkksdjalkjd</h1>
    </div>
  )
}

export default countriesCard
