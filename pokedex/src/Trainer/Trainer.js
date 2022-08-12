import React from 'react';
import TrainerList from './Trainerlist';
import { useNavigate } from "react-router-dom"
import Navbar from '../Navbar';


export default function Trainer({trainer}) {
    const navigate = useNavigate()
    function toHome() {
        navigate("/")
    }

    function toCreateTrainerForm() {
        navigate("/createtrainer")
    }
    

    return (
        <>
        <Navbar />
        <div id="trainerList">
        <h2>Trainers</h2>
        {trainer.map((data) => 
            {if (data.gym === undefined){return (
                <TrainerList
                trainer={data.name}
                img_url={data.image_url}
                id = {data.id}
                gym = "Not associated with a gym"
                pokemon = "Pikachu"
                />)
            } else {
                return (
                <TrainerList
                    trainer={data.name}
                    img_url={data.image_url}
                    gym = {data.gym.location}
                    pokemon = {data.gym.pokemon.map((stuff) => stuff.poke_name)}
                    id = {data.id}
                    />)}})}
                
                
                <button onClick={toHome}>Home</button>
        
        </div>
        </>
    )
}
