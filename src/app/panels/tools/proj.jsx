import React, {useEffect, useState} from 'react'

export default function Project(props) {
    const [name, setName] = useState(props.name)

    useEffect(() => {
        setName(props.name)
    }, [props.name])

    return (
        <div className="block tools-block">
            <select onChange={(e) => {
                    props.handleProjectMenu(e.target.value)
                    e.target.value="DEFAULT"
                    setName(props.name)
                }} value={'DEFAULT'}>
                <option value="DEFAULT" disabled hidden>Файл</option>
                <option value="open">Открыть</option>
                <option value="save">Сохранить</option>
                <option>Экспорт</option>
                <option value="close">Закрыть</option>
                <option>Свойства</option>
            </select>
            <span>{name}</span>
        </div>
    )
}
