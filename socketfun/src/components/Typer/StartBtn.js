import React, { useState } from 'react'
import socket from'./../../sockeConfig'
import Button from '../../neumorphism/Button/Button';
import './StartBtn.css'
import HowItWorks from '../Common/HowItWorks/HowItWorks';
import InviteCode from '../Common/InviteCode/InviteCode';
import PlayerInLobby from '../Common/PlayerInLobby/PlayerInLobby';

function StartBtn({player, gameID}) {

    // const[showBtn, setShowBtn]=useState(true)
    // const{isPartyLeader}=player;

    const handleClick=(e)=>{
        // socket.emit('timer', {playerID : player._id, gameID});
        // setShowBtn(false)
    }
    return (
    //    (isPartyLeader && showBtn) ? 
        // <Button 
        // onClick={handleClick}>Start Game</Button>
        // :
        // null
                                        // <span>Please wait <b>admin</b> should start the game</span>

        // <div className="GameMenu ManuDiv">
        // <div className="Headings HeadMain" style={{marginBottom:'50px'}}>Create Game</div>
        //     <div className="">
        //     <Button 
        //          onClick={handleClick}>Start Game</Button>
        //     </div>
        // </div>
        <div className="MainFlexSTartBtn">
            <div className="FlexStartItem1">
                <HowItWorks/>
            </div>
            <div className="FlexStartItem2">
                <div className="in HRLine"></div>
            </div>
            <div className="FlexStartItem1">
                <div className="SecondSytartFlec">
                    <InviteCode/>
                    <div style={{marginTop:'30px'}}>
                         <PlayerInLobby/>
                    </div>
                    <div style={{marginTop:'100px'}}>
                        <Button 
                            onClick={handleClick}>Start Game</Button>
                    </div>
                </div>
            </div>
        </div>
                                    
    )
}

export default StartBtn
