import React, { useEffect, useState } from 'react'

export default function TransitionFields(props) {

    const [type, setType] = useState(props.fade.type)
    const [duration, setDuration] = useState(props.fade.duration)
    const [alpha, setAlpha] = useState(props.fade.max_alpha)

    useEffect(() => {
        setType(props.fade.type)
    }, [props.fade.type])

    useEffect(() => {
        setDuration(props.fade.duration)
    }, [props.fade.duration])

    useEffect(() => {
        setAlpha(props.fade.max_alpha)
    }, [props.fade.max_alpha])

    return <>
            <select id="select-fade" value={type} onChange={(e) => {
                props.handleInputChange([`fade`, `type`], e.target.value)
                setType(e.target.value)
            }}>
                <option value="in">Появление</option>
                <option value="inout">Появление и исчезновение</option>
                <option value="out">Исчезновение</option>
            </select>
            <label htmlFor="time-fade-in">Продолжительность: </label>
            <input
                onChange={(e) => {
                    props.handleInputChange([`fade`, `duration`], parseInt(e.target.value))
                    setDuration(parseInt(e.target.value))
                }}
                id="time-fade-in"
                className="param-field param-field--fade"
                type="number"
                value={duration}
            ></input>
            <label htmlFor="time-fade-out">Степень: </label>
            <input
                onChange={(e) => {
                    props.handleInputChange([`fade`, `max_alpha`], parseFloat(e.target.value))
                    setAlpha(parseFloat(e.target.value))
                }}
                id="time-fade-alpha"
                className="param-field param-field--fade"
                type="number"
                value={alpha}
                step="0.1"
            ></input>
        </>
}
