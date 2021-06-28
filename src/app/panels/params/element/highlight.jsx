import React, { useState, useEffect } from 'react'

export default function Highlight(props) {
    const [borderWidth, setWidth] = useState(props.currentEl.lineWidth)
    const [borderColor, setBorderColor] = useState(props.currentEl.lineColor)
    const [shadowColor, setShadow] = useState(props.currentEl.shadowColor)
    const [alpha, setAlpha] = useState(props.currentEl.max_alpha)

    useEffect(() => {
        setWidth(props.currentEl.lineWidth)
    }, [props.currentEl.lineWidth])

    useEffect(() => {
        setBorderColor(props.currentEl.lineColor)
    }, [props.currentEl.lineColor])

    useEffect(() => {
        setShadow(props.currentEl.shadowColor)
    }, [props.currentEl.shadowColor])
    
    useEffect(() => {
        setAlpha(props.currentEl.max_alpha)
    }, [props.currentEl.max_alpha])

    return <fieldset>
        <legend>Подсветка</legend>
        <label htmlFor="block-highlight-border-color">Граница: </label>
        <input
            id="block-highlight-border-color"
            className="param-field param-field--border-color"
            type="color"
            value={borderColor}
            onChange={(e) => {
                setBorderColor(e.target.value)
                props.handleInputChange(`lineColor`, e.target.value)
            }}
        ></input>
        <input
            id="block-highlight-border-width"
            className="param-field param-field--border-width"
            type="number"
            value={borderWidth}
            onChange={(e) => {
                setWidth(parseInt(e.target.value))
                props.handleInputChange(`lineWidth`, parseInt(e.target.value))
            }}
        ></input>
        <label htmlFor="block-highlight-border-width"> px</label>
        <br/>
        <label htmlFor="block-highlight-fill-color">Тень: </label>
        <input
            id="block-highlight-fill-color"
            className="param-field param-field--fill-color"
            type="color"
            value={shadowColor}
            onChange={(e) => {
                setShadow(e.target.value)
                props.handleInputChange(`shadowColor`, e.target.value)
            }}
        ></input>
        <label htmlFor="block-highlight-alpha">Прозрачность: </label>
        <input
            id="block-highlight-alpha"
            className="param-field param-field--alpha"
            type="number"
            value={alpha}
            step="0.1"
            onChange={(e) => {
                setAlpha(parseFloat(e.target.value))
                props.handleInputChange(`max_alpha`, parseFloat(e.target.value))
            }}
        ></input>
    </fieldset>
}

