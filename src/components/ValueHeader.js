import React, {useState} from 'react'
import '../styles/ValueHeader.css'
import {useSearchParams} from 'react-router-dom'

function ValueHeader({userid}) {

  const [userSearch, setUserSearch] = useState("")

  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <div className='valueHeader'>
      <div className='currentUser'>
        <p>User: {userid}</p>
      </div>
      <div className='right'>
        <p>Search For Another User</p>
        <form>
        <input
          type='text'
          required
          onChange={e => setUserSearch(e.target.value)} />
        </form>
        <button onClick={() => {setSearchParams({'user': userSearch})}}>Go</button>
      </div>
    </div>
  )
}

export default ValueHeader
