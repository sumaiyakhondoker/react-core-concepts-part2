import { useState } from "react"

export default function Team(){

    const [players, setPlayers] = useState(0)
    // console.log(abc);

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    const handleAdd=()=>{
        const newCount = players + 1;
        setPlayers(newCount)
    }

    const handleRemove=()=>{
        const newCount = players - 1;
        setPlayers(newCount)
    }
    return(
        <div style={teamStyle}>
            <h3>Players: {players}</h3>
            <button onClick={handleAdd}>Add Player</button>

            <button onClick={handleRemove}>Remove Player</button>
        </div>
    )
}