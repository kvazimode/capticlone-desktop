import React from 'react'
import SimpleText from './element/simple-text.jsx'
import Slide from './element/slide.jsx'
import Img from './element/image.jsx'
import Rect from './element/rect.jsx'
import TextBlock from './element/text-block.jsx'
import Highlight from './element/highlight.jsx'

const bgList = [
    `bgName1.png`,
    `bgName2.png`,
    `bgName3.png`,
    `bgName4.png`,
]

const imgList = [
    `img1.png`,
    `img2.png`,
    `img3.png`,
    `img4.png`,
    `img5.png`,
    `img6.png`,
    `img7.png`,
]

export default function Element(props) {
    switch (props.type) {
        case `simple-text`:
            return <SimpleText />;
        case `slide`:
            return <Slide bgList={bgList}/>;
        case `image`:
            return <Img imgList={imgList}/>;
        case `rect`:
            return <Rect />;
        case `text-block`:
            return <TextBlock />;
        case `highlight`:
            return <Highlight />
    }
}
