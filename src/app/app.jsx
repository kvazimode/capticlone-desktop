import React, {PureComponent} from 'react'
import Tools from './panels/tools/tools.jsx'
import Timeline from './panels/timeline/timeline.jsx'
import Tabs from './panels/params/tabs.jsx'
import SlideList from './panels/slide-list/slide-list.jsx'
import Canvas from './canvas/canvas.jsx'

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            bgList: this.props.state.library.bgList,
            imgList: this.props.state.library.imgList,
            currentSlideID: this.props.state.currentSlide,
            scale: this.props.state.scale
        }
        
        this.slides = props.proj.slides
        this.slideNameClickHandler = this.slideNameClickHandler.bind(this)
    }

    slideNameClickHandler(id) {
        this.setState({currentSlideID: id})
    }

    _currentSlide() {
        return this.slides.find(x => x.id == this.state.currentSlideID)
    }

    render() {
        return <>
            <Tools />
            <Canvas bgImg={this._currentSlide().bgImg}/>
            <SlideList
                slides={this.slides}
                currentSlideID={this.state.currentSlideID}
                slideNameClickHandler={this.slideNameClickHandler}
            />
            <Timeline />
            <Tabs bgList={this.state.bgList} imgList={this.state.imgList} />
        </>
    }
}

export default App
