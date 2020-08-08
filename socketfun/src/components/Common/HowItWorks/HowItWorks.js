import React from 'react'
import './HowItWorks.css'

export default function HowItWorks(props) {
    return (
        <div className={"out HowToPlay "+props.className}>
            <div className="HowWorksHeading">How to play</div>
            <ul className="HowWorksSubHeading">
                <li>Invite players with the inviate code</li>
                <li>Ask them to join the game and enter name and code</li>
                <li>Player Joined will be updated as players joins</li>
                <li>Players will be waiting in lobby</li>
                <li>You should start the game</li>
                <li>If staretd 5 second countdown starts and game begins</li>
            </ul>
        </div>
    )
}
