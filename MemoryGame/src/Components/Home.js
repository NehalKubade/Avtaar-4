import React from 'react'
import {Link} from 'react-router-dom';

function Home(props) {
    return (
        <>
            <div className="container">
                <h1 className={`text-center text-${props.theme === "light" ? "dark" : "light"}`}>MEMORY GAME &#128161;</h1>
                <h3 className={`text-center mt-4 text-${props.theme === "light" ? "dark" : "light"}`}>Choose from complexity below to start.</h3>
                <div className="d-flex justify-content-center my-4">
                    <Link to="/play/easy" className={`btn btn-${props.theme === "light" ? "dark" : "light"} mx-2`}>4 x 4</Link>
                    <Link to="/play/medium" className={`btn btn-${props.theme === "light" ? "dark" : "light"} mx-2`}>6 x 4</Link>
                </div>
            </div>
        </>
    )
}

export default Home
