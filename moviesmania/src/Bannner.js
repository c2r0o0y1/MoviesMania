import React from 'react'
import './Banner.css'
function Bannner() {
    function shortner(string, n) {
        if(string.length > n ) {
            return string.substr(0,n-1) + '..';
        }
        return string;
    }
    return (
    <header className='banner' 
        style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://pixy.org/src/49/491517.png')`,
        backgroundPosition: "center center",
    }}>
        <div className='banner__contents'>
            <h1 className='banner__title'> Movie Name</h1>
            <div className='bannner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='bann er__button'>My List</button>
            </div>
            <h1 className='banner__description'>
                {shortner(`Test Description`,3)}
            </h1>
            <div className='banner--fadebutton' />
        </div>
    </header>
    )
}

export default Bannner
