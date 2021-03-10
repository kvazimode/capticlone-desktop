import React from 'react'

export default () => {
    return (
        <div className="block tools-block">
            <button className="button-element button-element--simple">ПТ</button>
            <button className="button-element button-element--block">БТ</button>
            <button className="button-element button-element--highlight">По</button>
            <button className="button-element button-element--image">Из</button>
            <button className="button-element button-element--rect">Пр</button>
            <label for="mouse-checkbox">Мышь</label>
            <input type="checkbox" className="checkbox-mouse" id="mouse-checkbox"></input>
        </div>
    )
}
