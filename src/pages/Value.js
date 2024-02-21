import React from 'react'
import {useSearchParams} from 'react-router-dom'

function Value() {

    const [searchParams, setSearchParams] = useSearchParams();

    const myParam = searchParams.get('user')

  return (
    <div>
      <h1>{myParam}</h1>
    </div>
  )
}

export default Value
