import React from 'react'

export default function Library(props) {
    const {imgList, bgList} = props
    return <>
        <details open>
            <summary>Изображения</summary>
            <ul>
                {imgList.map((img, num) => {
                    return <li key={num}>{img}</li>
                })}
            </ul>
        </details>
        <details open>
            <summary>Фоны</summary>
            <ul>
                {bgList.map((img, num) => {
                    if (!img) return
                    return <li key={num}>{img}</li>
                })}
            </ul>
        </details>
    </>
}
