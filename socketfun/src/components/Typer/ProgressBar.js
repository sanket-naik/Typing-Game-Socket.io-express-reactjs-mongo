import React from 'react'

const calculatePercentage=(player, wordsLength)=>{
    if(player.currentWordIndex !==0){
        return ((player.currentWordIndex/wordsLength)*100).toFixed(2) +"%"
    }else{
        return 0
    }
}

export default function ProgressBar({players, player, wordsLength}) {
    const percentage= calculatePercentage(player, wordsLength);
    return (
        <>
        <div>
            <h5>
                {player.nickName}
            </h5>
            <div>
                {percentage}
            </div>
        </div>
        {
            players.map(playerobj=>{
                const percentage= calculatePercentage(playerobj, wordsLength);
                return playerobj._id!==player._id &&
                <div>
                    <h5>
                        {playerobj.nickName}
                    </h5>
                    <div>
                        {percentage}
                    </div>
                </div>

            })
        }
        </>
    )
}
