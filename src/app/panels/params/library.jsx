import React from 'react'

export default function Library(props) {
    const {imgList, bgList} = props
    return <>
        <details>
            <summary>Изображения</summary>
            <ul>
                {imgList.map((img, num) => {
                    return <li key={num}>{img}</li>
                })}
            </ul>
        </details>
        <details>
            <summary>Фоны</summary>
            <ul>
                {bgList.map((img, num) => {
                    return <li key={num}>{img}</li>
                })}
            </ul>
        </details>
    </>
}
