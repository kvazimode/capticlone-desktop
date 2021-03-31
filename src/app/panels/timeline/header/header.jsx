import React from 'react'
import Ruler from './ruler.jsx'

export default function Header() {
    return <div className="header">
        <div className="header-name">Имя</div>
        <button className="header-toggler">С</button>
        <Ruler />
    </div>
}

