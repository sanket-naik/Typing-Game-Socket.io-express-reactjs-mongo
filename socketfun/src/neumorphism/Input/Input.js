import React from 'react'
import './Input.css'

export default function Input(props) {
    return (
        <>
        <div className={"InputStyle in "+props.className}  style={{...props.style}}>
            <div className="IconInput">
                <img className="IconInp" width={'iconSize' in props? props.iconSize:"25px"} src={props.icon}/>
            </div>
            <div> 
                <input 
                    type="text"
                    value={props.value}
                    name={props.name}
                    placeholder={props.placeholder}
                    className={"InputMain"}
                    onChange={props.onChange}/>
            </div>
        </div>
           
        </>
    )
}
