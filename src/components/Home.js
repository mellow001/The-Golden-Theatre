import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [search, setSearch] = useState();

  return (
    <div className='homeBg'>
        <div className='home'>
                <h1>Unlimited movies, TV shows, and more.! </h1>
                <input value={search} onChange={(event)=>setSearch(event.target.value)} type='text' placeholder='E.g."Lucifer" or "Elite"' />
       
        <button type='submit'>
                <Link to={`/search/${search}`}>Search</Link>
        </button>
        </div>
    </div>
  )
}

export default Home