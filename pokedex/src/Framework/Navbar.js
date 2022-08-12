import React from 'react'
import { useNavigate } from "react-router-dom"

export default function Navbar(){

    const navigate = useNavigate()
    function toHome() {
        navigate("/")
    }

    return (
        <div id="navbar">
            <img src="https://archives.bulbagarden.net/media/upload/7/79/Dream_Pok%C3%A9_Ball_Sprite.png" alt="pokeball" id="pokeball" onClick={toHome}/>
            <h2 id="navbarTitle">Pokedex</h2>
        </div>
    )
}