import React from 'react'
import SimpleText from './element/simple-text.jsx'
import Slide from './element/slide.jsx'
import Img from './element/image.jsx'
import Rect from './element/rect.jsx'
import TextBlock from './element/text-block.jsx'
import Highlight from './element/highlight.jsx'
import Mouse from './element/mouse.jsx'

export default function Element(props) {
    if (props.currentEl) {
        switch (props.currentEl.type) {
        case `SimpleText`:
            return <SimpleText currentEl={props.currentEl} handleInputChange={props.handleInputChange}/>;
        case `Image`:
            return <Img imgList={props.imgList}/>;
        case `Rect`:
            return <Rect />;
        case `TextBox`:
            return <TextBlock currentEl={props.currentEl} handleInputChange={props.handleInputChange} />;
        case `Highlight`:
            return <Highlight currentEl={props.currentEl} handleInputChange={props.handleInputChange} />
        case `Mouse`:
            return <Mouse />;
        default:
            return <Slide bgList={props.bgList} handleBgChange={props.handleBgChange}/>;
        }
    }
    return <Slide bgList={props.bgList}/>
}
