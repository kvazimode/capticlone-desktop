import React, {PureComponent} from 'react'
import Tools from './panels/tools/tools.jsx'
import Timeline from './panels/timeline/timeline.jsx'
import Params from './panels/params/params.jsx'
import SlideList from './panels/slide-list/slide-list.jsx'
import Canvas from './canvas/canvas.jsx'

class App extends PureComponent {
    render() {
        const {props} = this.props
        return <React.Fragment>
            <Tools />
            <Canvas />
            <SlideList />
            <Timeline />
            <Params />
        </React.Fragment>
    }
    
}

export default App
