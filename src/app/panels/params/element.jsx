import React from 'react'
import SimpleText from './element/simple-text.jsx'
import Slide from './element/slide.jsx'
import Img from './element/image.jsx'
import Rect from './element/rect.jsx'
import TextBlock from './element/text-block.jsx'
import Highlight from './element/highlight.jsx'
import Mouse from './element/mouse.jsx'

export default function Element(props) {
    switch (props.type) {
        case `simple-text`:
            return <SimpleText />;
        case `slide`:
            return <Slide bgList={props.bgList}/>;
        case `image`:
            return <Img imgList={props.imgList}/>;
        case `rect`:
            return <Rect />;
        case `text-block`:
            return <TextBlock />;
        case `highlight`:
            return <Highlight />
        case `mouse`:
            return <Mouse />
    }
}
