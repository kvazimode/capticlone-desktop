import React, { useEffect, useState } from 'react'

export default function TextBlock(props) {
    const [font, setFont] = useState(props.currentEl.font)
    const [fontSize, setFontSize] = useState(parseInt(props.currentEl.fontSize, 10))
    const [fontColor, setFontColor] = useState(props.currentEl.txtFill)
    const [bgColor, setBgColor] = useState(props.currentEl.bgFill)
    const [text, setText] = useState(props.currentEl.text)

    useEffect(() => {
        setFont(props.currentEl.font)
    }, [props.currentEl.font])

    useEffect(() => {
        setFontSize(parseInt(props.currentEl.fontSize, 10))
    }, [props.currentEl.fontSize])

    useEffect(() => {
        setFontColor(props.currentEl.txtFill)
    }, [props.currentEl.txtFill])

    useEffect(() => {
        setBgColor(props.currentEl.bgFill)
    }, [props.currentEl.bgFill])

    useEffect(() => {
        setText(props.currentEl.text)
    }, [props.currentEl.text])

    return <fieldset>
        <legend>Блок текста</legend>
            <label htmlFor="block-text-name">Имя: </label>
            <input id="block-text-name" className="param-field param-field--text" type="text" defaultValue="blocktext1"></input>
            <label htmlFor="select-font">Шрифт: </label>
            <select id="select-font" value={font} onChange={(e) => {
                props.handleInputChange(`font`, e.target.value)
                setFont(e.target.value)
            }}>
                <option value="Arial">Arial</option>
                <option value="Roboto">Roboto</option>
                <option value="Tahoma">Tahoma</option>
            </select>
            <label htmlFor="block-text-font-size">Размер: </label>
            <input
                onChange={(e) => {
                    props.handleInputChange(`fontSize`, e.target.value + `px`)
                    setFontSize(e.target.value)
                }}
                id="block-text-font-size"
                className="param-field param-field--font-size"
                type="number"
                value={fontSize}
            ></input>
            <label htmlFor="block-text-font-color">Цвет: </label>
            <input
                onChange={(e) => {
                    props.handleInputChange(`txtFill`, e.target.value)
                    setFontColor(e.target.value)
                }}
                id="block-text-font-color"
                className="param-field param-field--font-color"
                type="color"
                value={fontColor}
            ></input>
            <fieldset>
                <legend>Блок</legend>
                <label htmlFor="block-text-border-color">Граница: </label>
                <input id="block-text-border-color" className="param-field param-field--border-color" type="color" defaultValue="#fff"></input>
                <input id="block-text-border-width" className="param-field param-field--border-width" type="number" defaultValue="2"></input>
                <label htmlFor="block-text-border-width"> px</label>
                <br/>
                <label htmlFor="block-text-fill-color">Заливка: </label>
                <input
                    onChange={(e) => {
                        props.handleInputChange(`bgFill`, e.target.value)
                        setBgColor(e.target.value)
                    }}
                    id="block-text-fill-color"
                    className="param-field param-field--fill-color"
                    type="color"
                    value={bgColor}
                ></input>
            </fieldset>
            
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
}
