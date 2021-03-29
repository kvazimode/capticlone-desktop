import React, {PureComponent} from 'react'
import Tools from './panels/tools/tools.jsx'
import Timeline from './panels/timeline/timeline.jsx'
import Tabs from './panels/params/tabs.jsx'
import SlideList from './panels/slide-list/slide-list.jsx'
import Canvas from './canvas/canvas.jsx'

const tab = 
// `params`
`library`

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
class App extends PureComponent {
    render() {
        const {props} = this.props
        return <>
            <Tools />
            <Canvas />
            <SlideList />
            <Timeline />
            <Tabs tab={tab} bgList={bgList} imgList={imgList} />
        </>
    }
}

export default App
