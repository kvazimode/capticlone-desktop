import React, { useEffect, useState } from 'react'

export default function SimpleText(props) {
    const [font, setFont] = useState(props.currentEl.font)
    const [fontSize, setSize] = useState(parseInt(props.currentEl.fontSize, 10))
    const [color, setColor] = useState(props.currentEl.txtFill)
    const [text, setText] = useState(props.currentEl.text)

    useEffect(() => {
        setFont(props.currentEl.font)
    }, [props.currentEl.font])

    useEffect(() => {
        setSize(parseInt(props.currentEl.fontSize, 10))
    }, [props.currentEl.fontSize])

    useEffect(() => {
        setColor(props.currentEl.txtFill)
    }, [props.currentEl.txtFill])

    useEffect(() => {
        setText(props.currentEl.text)
    }, [props.currentEl.text])

    return (
        <fieldset>
            <legend>Простой текст</legend>
            <label htmlFor="simple-text-name">Имя: </label>
            <input disabled id="simple-text-name" className="param-field param-field--text" type="text" defaultValue="simpletext1"></input>
            <label htmlFor="select-font">Шрифт: </label>
            <select id="select-font" value={font} onChange={(e) => {
                props.handleInputChange(`font`, e.target.value)
                setFont(e.target.value)
            }}>
                <option value="Arial">Arial</option>
                <option value="Roboto">Roboto</option>
                <option value="Tahoma">Tahoma</option>
            </select>
            <label htmlFor="simple-text-font-size">Размер: </label>
            <input
                onChange={(e) => {
                    props.handleInputChange(`fontSize`, e.target.value + `px`)
                    setSize(e.target.value)
                }}
                id="simple-text-font-size"
                className="param-field param-field--font-size"
                type="number"
                value={fontSize}
            ></input>
            <label htmlFor="simple-text-font-color">Цвет: </label>
            <input
                onChange={(e) => {
                    props.handleInputChange(`txtFill`, e.target.value)
                    setColor(e.target.value)
                }}
                id="simple-text-font-color"
                className="param-field param-field--font-color"
                type="color"
                value={color}
            ></input>
            <label htmlFor="text">Содержимое: </label>
            <textarea
                onChange={(e) => {
                    props.handleInputChange(`text`, e.target.value)
                    setText(e.target.value)
                }}
                id="text"
                type="fieldset"
                rows="3"
                value={text}
            ></textarea>
        </fieldset>
    )
}
