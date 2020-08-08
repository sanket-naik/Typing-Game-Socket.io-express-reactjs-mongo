import React from 'react'
import {withRouter} from 'react-router-dom'
import Button from '../neumorphism/Button/Button'
import './GameMenu.css'

function GameMenu(props) {
    
    return (
        <div className="GameMenu">
           <div className="ManuDiv">
            <div className="Headings HeadMain" style={{marginBottom:'70px'}}>Welcome to Game</div>
            <div className="InnerBrnMain">
                <Button className="ManuflexItem" onClick={()=>props.history.push("/typer/create")}>Create Game</Button>
                <Button className="ManuflexItem" onClick={()=>props.history.push("/typer/join")}>Join Game</Button>
           </div>
           </div>
        </div>
    )
}

export default withRouter(GameMenu)