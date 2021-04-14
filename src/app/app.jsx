import React, {PureComponent} from 'react'
import Tools from './panels/tools/tools.jsx'
import Timeline from './panels/timeline/timeline.jsx'
import Tabs from './panels/params/tabs.jsx'
import SlideList from './panels/slide-list/slide-list.jsx'
import Canvas from './canvas/canvas.jsx'

const defaultEl = {
    start: 0,
    duration: 0,
    position: {
        x: 0,
        y: 0
    },
    w: 0,
    h: 0,
    transition: {
        type: `inout`,
        start: 0,
        duration: 0
    }
}

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
            currentBg: this.bgList[0],
            currentEl: defaultEl
        }
        this.slideNameClickHandler = this.slideNameClickHandler.bind(this)
        this.elementClickHandler = this.elementClickHandler.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    slideNameClickHandler(id) {
        this.setState({
            currentSlideID: id, 
            currentSlide: this._currentSlide(id), 
            currentBg: this._currentBg(id),
            currentEl: defaultEl
        })
    }

    elementClickHandler(el) {
        this.setState({currentEl: el})
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

    handleInputChange(type, val) {
        const newEl = {...this.state.currentEl}
        const newSlide = {...this.state.currentSlide}
        if (!Array.isArray(type)) {
            newEl[type] = val
        } else {
            newEl[type[0]][type[1]] = val
        }
        let index = this.state.currentSlide.elements.indexOf(this.state.currentEl)
        newSlide.elements[index] = newEl
        this.setState({currentEl: newEl, currentSlide: newSlide})
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
            <Timeline
                slide={this.state.currentSlide}
                currentEl={this.state.currentEl}
                elementClickHandler={this.elementClickHandler}
            />
            <Tabs
                handleInputChange={this.handleInputChange}
                bgList={this.state.bgList}
                imgList={this.state.imgList}
                currentEl={this.state.currentEl}
            />
        </>
    }
}

export default App
