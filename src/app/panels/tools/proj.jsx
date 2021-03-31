import React from 'react'

export default function Project() {
    return (
        <div className="block tools-block">
            <select defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled hidden>Файл</option>
                <option>Открыть</option>
                <option>Сохранить</option>
                <option>Экспорт</option>
                <option>Закрыть</option>
                <option>Свойства</option>
            </select>
        </div>
    )
}
