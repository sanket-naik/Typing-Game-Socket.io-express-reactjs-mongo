import React from 'react'

const getTypedWords=(words, player)=>{
    let typedWords = words.slice(0, player.currentWordIndex);
    typedWords = typedWords.join(" ")
    return <span style={{backgroundColor:'green'}}> {typedWords}</span>
}

const getCurrentWord=(words, player)=>{
    return <span style={{textDecoration:'underline'}}>{words[player.currentWordIndex]}</span>
}

const getWordsToBeTyped=(words, player)=>{
    let wordsToBeTyped =words.slice(player.currentWordIndex +1, words.length)
    wordsToBeTyped= wordsToBeTyped.join(" ")
    return <span> {wordsToBeTyped}</span>
}

export default function DisplayWords({words, player}) {
    return (
        <div>
            {getTypedWords(words, player)}
            {getCurrentWord(words, player)}
            {getWordsToBeTyped(words, player)}
        </div>
    )
}
