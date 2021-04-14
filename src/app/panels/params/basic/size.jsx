import React, {useState, useEffect} from 'react'

export default function Size(props) {
    const [w, setW] = useState(props.w)
    const [h, setH] = useState(props.h)

    useEffect(() => {
        setW(props.w)
    }, [props.w])

    useEffect(() => {
        setH(props.h)
    }, [props.h])

    return <>
        <label htmlFor="pos-width">Ш: </label>
        <input
            onChange={(e) => {
                setW(parseInt(e.target.value))
                props.handleInputChange(`w`, parseInt(e.target.value))
            }}
            id="pos-width"
            className="param-field param-field--num"
            type="number"
            value={w}
        ></input>
        <label htmlFor="pos-height">В: </label>
        <input
            onChange={(e) => {
                setH(parseInt(e.target.value))
                props.handleInputChange(`h`, parseInt(e.target.value))
            }}
            id="pos-height"
            className="param-field param-field--num"
            type="number"
            value={h}
        ></input>
        <label htmlFor="pos-constrain">Пропорции</label>
        <input id="pos-constrain" type="checkbox"></input>
    </>
}
