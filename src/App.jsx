import React, { useState, useEffect } from 'react'
import Search from './components/Search'

const API_BASE_URL   = 'https://api.themoviedb.org/3'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
  
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('batman')
  const [error, setError] = useState('')

  const fetchMovies = async () => {
    try{

    } catch(error){
      console.log(error)
      setError('Something went wrong when fetching movies')
    }
  }

  useEffect(() => {

  }, [])

  return (
    <main>
      <div className="pattern" />
        <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle!</h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Search>
        </header>


      <section className='all-movies'>
        <h2 className='text-white'>All Movies</h2>

        {error && <p className='text-red-600'>{error}</p>}
      </section>
      </div>
    </main>
  )
}

export default App