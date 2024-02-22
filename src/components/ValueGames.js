import React, {useState, useEffect} from 'react'
import Game from './Game'
import axios from 'axios'
import {useSearchParams} from 'react-router-dom'

import '../styles/ValueGames.css'

function ValueGames() {

    const [games, setGames] = useState("")

    const [searchParams, setSearchParams] = useSearchParams();

    const user = searchParams.get('user')


    useEffect(() =>{
        axios.get('https://steam-value-api-2oom6car7a-nw.a.run.app/value/?user_id=' + user)
        .then(res =>{
            if("response" in res.data){
                console.log("Error finding steam ID")
            }
            else{
                setGames(res.data)
            }
            
        })

    }, [])



  return (
    <div className='valueGames'>
        {games == "" ? <p>Loading</p> : games.map((game) => {return <Game name={game['name']} price={game['price']} timePlayed={game['playtime_forever']}/>})}

    </div>
  )
}

export default ValueGames
