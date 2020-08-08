import React from 'react'

const getScoreBoard =(players)=>{
    const scoreBoard= players.filter(player=>player.WPM !==-1);
    return scoreBoard.sort((a,b)=>a.WPM > b.WPM ? -1 : b.WPM > a.WPM ? 1 : 0)
}

export default function ScoreBoard({players}) {
    const scoreBoard= getScoreBoard(players)
    if(scoreBoard.length===0){
        return null
    }else{
        return (
            <>
            <div style={{display:'flex'}}>
                <div>#</div>
                <div>name</div>
                <div>wpm</div>
            </div>
            {scoreBoard.map((player, index)=>(
                <div style={{display:'flex'}}>
                <div>{index+1}</div>
                <div>{player.nickName}</div>
                <div>{player.WPM}</div>
            </div>
            ))}
            </>
        )
    }
}
