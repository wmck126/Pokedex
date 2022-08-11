import React from 'react';
import TrainerList from './Trainerlist';
import { useNavigate } from "react-router-dom"


export default function Trainer({trainer}) {
    const navigate = useNavigate()
    function toHome() {
        navigate("/")
    }

    function toCreateTrainerForm() {
        navigate("/createtrainer")
    }
    

    return (
        <div>
        <h3>Select a trainer to learn more!</h3>
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
    )
}
