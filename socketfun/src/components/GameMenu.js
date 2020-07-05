import React from 'react'
import {withRouter} from 'react-router-dom'

function GameMenu(props) {
    
    return (
        <div>
            <h4>Welcome to Game...</h4>
            <button onClick={()=>props.history.push("/typer/create")}>Create Game</button>
            <button onClick={()=>props.history.push("/typer/join")}>Join Game</button>
        </div>
    )
}

export default withRouter(GameMenu)