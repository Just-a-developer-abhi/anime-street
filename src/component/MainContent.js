import React from 'react'

const MainContent = () => {
  return (
    <main>
        <div className="main-head">
            <form 
            className="search-box">
                <input 
                type='search'
                placeholder='search for any Anime'
                required
                />
            </form>
        </div>
    </main>
  )
}

export default MainContent