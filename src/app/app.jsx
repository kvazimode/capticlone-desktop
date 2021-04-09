import React, {PureComponent} from 'react'
import Tools from './panels/tools/tools.jsx'
import Timeline from './panels/timeline/timeline.jsx'
import Tabs from './panels/params/tabs.jsx'
import SlideList from './panels/slide-list/slide-list.jsx'
import Canvas from './canvas/canvas.jsx'

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.slides = props.proj.slides
        this.bgList = this._preloadBg()
        this.state = {
            bgList: this.props.state.library.bgList,
            imgList: this.props.state.library.imgList,
            currentSlideID: this.props.state.currentSlide,
            currentSlide: this.slides[0],
            scale: this.props.state.scale,
            currentBg: this.bgList[0]
        }
        this.slideNameClickHandler = this.slideNameClickHandler.bind(this)
    }

    slideNameClickHandler(id) {
        this.setState({currentSlideID: id, currentSlide: this._currentSlide(id), currentBg: this._currentBg(id)})
    }

    _currentSlide(id) {
        return this.slides.find(x => x.id == id)
    }

    _preloadBg() {
        const preloaded = []
        this.slides.map(slide => {
            const img = new Image()
            img.src = `./img/${slide.bgImg}`
            img.slideID = slide.id
            preloaded.push(img)
        })
        return preloaded
    }

    _currentBg(id) {
        return this.bgList.find(x => x.slideID == id)
    }

    render() {
        return <>
            <Tools />
            <Canvas bgImg={this.state.currentBg}/>
            <SlideList
                slides={this.slides}
                currentSlideID={this.state.currentSlideID}
                slideNameClickHandler={this.slideNameClickHandler}
            />
            <Timeline slide={this.state.currentSlide}/>
            <Tabs bgList={this.state.bgList} imgList={this.state.imgList} />
        </>
    }
}

export default App
