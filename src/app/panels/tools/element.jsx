import React from 'react'

export default () => {
    return (
        <div className="block tools-block">
            <button className="button-tools button-element--simple">ПТ</button>
            <button className="button-tools button-element--block">БТ</button>
            <button className="button-tools button-element--highlight">По</button>
            <button className="button-tools button-element--image">Из</button>
            <button className="button-tools button-element--rect">Пр</button>
            <label htmlFor="mouse-checkbox">Мышь</label>
            <input type="checkbox" className="checkbox-mouse" id="mouse-checkbox"></input>
        </div>
    )
}
