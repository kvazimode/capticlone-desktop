import React from 'react'
import Timing from './basic/timing.jsx'
import Position from './basic/position.jsx'
import Transition from './basic/transition.jsx'

export default function Basic(props) {
    const {start, duration, position, w, h} = props.currentEl
    return (<form>
        <Timing
            start={start}
            duration={duration}
            handleInputChange={props.handleInputChange}
        />
        <Position
            position={position}
            w={w}
            h={h}
            handleInputChange={props.handleInputChange}/>
        <Transition />
    </form>)
}
