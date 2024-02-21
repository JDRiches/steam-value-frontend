import React, {useState} from 'react'
import Footer from '../components/Footer'
import '../styles/Home.css'
import {Link} from 'react-router-dom'

function Home() {

    const [userSearch, setUserSearch] = useState("")

  return (
    <div>
      <div className='home'>
        <div className='left'>
            <h1>Your Steam Value</h1>
        </div>
        <div className='right'>
            <div className='idBox'>
                <h2>Enter Steam ID</h2>
                <form>
                    <input
                        type='text'
                        required
                        onChange={e => setUserSearch(e.target.value)} />
                    <Link to={{
                        pathname: '/value',
                        search: '?user=' + userSearch
                    }}>
                        <button>Go</button>
                    </Link>
                </form>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
