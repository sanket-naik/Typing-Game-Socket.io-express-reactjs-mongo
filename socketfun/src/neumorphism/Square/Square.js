import React from 'react'
import './Square.css'

export default function Square(props) {
    return (
        <div className={"out AquareBlock "+props.className}>
            {props.children}
        </div>
    )
}
