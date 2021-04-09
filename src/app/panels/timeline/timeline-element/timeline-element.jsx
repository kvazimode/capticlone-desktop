import React from 'react'

export default function TimelineElement(props) {
    return <div 
                className={`timeline-element ${props.currentEl == props.el ? `element-selected` : ``}`}
                onClick={() => props.elementClickHandler(props.el)}
            >
        <div className="element-name">{props.el.type}</div>
        <button className="element-toggler">С</button>
        
        <div className="element-time">
            <div className="time-block" style={{ 
                marginLeft: props.el.start / 20,
                width: props.el.duration / 20  
            }}></div>
        </div>
    </div>
}
