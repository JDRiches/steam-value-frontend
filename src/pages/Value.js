import React from 'react'
import {useSearchParams} from 'react-router-dom'
import ValueHeader from '../components/ValueHeader';
import ValueGames from '../components/ValueGames';

import '../styles/Value.css'

function Value() {

    const [searchParams, setSearchParams] = useSearchParams();

    const myParam = searchParams.get('user')

  return (
    <div className='value'>
      <ValueHeader userid={myParam}/>
      <ValueGames />
    </div>
  )
}

export default Value
