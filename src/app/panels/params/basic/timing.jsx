import React, {useEffect, useState} from 'react'

function Timing(props) {
    const [start, setStart] = useState(props.start)
    const [duration, setDuration] = useState(props.duration)

    useEffect(() => {
        setStart(props.start)
    }, [props.start])

    useEffect(() => {
        setDuration(props.duration)
    }, [props.duration])

    return (
        <fieldset>
            <legend>Время</legend>
            <label htmlFor="timing-start">Начало: </label>
            <input
                onChange={(e) => {
                    setStart(parseInt(e.target.value))
                    props.handleInputChange(`start`, parseInt(e.target.value))

                }}
                id="timing-start" 
                className="param-field param-field--num" 
                type="number" 
                value={start}
                step="100"
            ></input>
            <label htmlFor="timing-duration">Продолжительность: </label>
            <input
                onChange={(e) => {
                    setDuration(parseInt(e.target.value))
                    props.handleInputChange(`duration`, parseInt(e.target.value))
                }}
                id="timing-duration"
                className="param-field param-field--num"
                type="number"
                value={duration}
                step="100"
            ></input>
        </fieldset>
    )

}

export default Timing
