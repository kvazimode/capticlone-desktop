import React from 'react'
import Timing from './basic/timing.jsx'
import Position from './basic/position.jsx'
import Transition from './basic/transition.jsx'

export default function Basic(props) {
    const start = props.currentEl ? props.currentEl.start : 0
    const duration = props.currentEl ? props.currentEl.duration : 0
    return (<form>
        <Timing
            start={start}
            duration={duration}
            handleInputChange={props.handleInputChange}
        />
        <Position />
        <Transition />
    </form>)
}
