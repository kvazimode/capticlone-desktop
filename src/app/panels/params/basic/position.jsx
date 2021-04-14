import React, { useEffect, useState } from 'react'
import Size from './size.jsx'

export default function Position(props) {
    const [x, setX] = useState(props.position.x)
    const [y, setY] = useState(props.position.y)

    useEffect(() => {
        setX(props.position.x)
    }, [props.position.x])

    useEffect(() => {
        setY(props.position.y)
    }, [props.position.y])

    return (<fieldset>
        <legend>Позиция, размер</legend>
        <label htmlFor="pos-x">X: </label>
        <input
            onChange={(e) => {
                setX(parseInt(e.target.value))
                props.handleInputChange([`position`, `x`], parseInt(e.target.value))
            }}
            id="pos-x"
            className="param-field param-field--num"
            type="number"
            value={x}
        ></input>
        <label htmlFor="pos-y">Y: </label>
        <input
            onChange={(e) => {
                setY(parseInt(e.target.value))
                props.handleInputChange([`position`, `y`], parseInt(e.target.value))
            }}
            id="pos-y"
            className="param-field param-field--num"
            type="number"
            value={y}
        ></input>
        {props.w ? <Size w={props.w} h={props.h} handleInputChange={props.handleInputChange}/> : ``}

    </fieldset>)
}

