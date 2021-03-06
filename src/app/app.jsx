import React, {PureComponent} from 'react'
import Tools from './panels/tools/tools.jsx'
import Timeline from './panels/timeline/timeline.jsx'
import Tabs from './panels/params/tabs.jsx'
import SlideList from './panels/slide-list/slide-list.jsx'
import Canvas from './canvas/canvas.jsx'
import defaultEl from '../data/default-el.js'
import blankSlide from '../data/blank-slide.js'

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.proj = props.proj
        this.resolution = this.proj.resolution
        this.bgImages = props.bgImages
        this.name = this.proj.name
        this.state = {
            bgList: this.props.backgrounds,
            imgList: this.props.images,
            currentSlideID: 0,
            currentSlide: this.proj.slides[0],
            scale: 1,
            currentBg: this.bgImages.get(this.proj.slides[0].bgImg),
            currentEl: defaultEl,
            slides: this.proj.slides,
            idCount: this.proj.slides.length
        }
        this.slideNameClickHandler = this.slideNameClickHandler.bind(this)
        this.elementClickHandler = this.elementClickHandler.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleProjectMenu = this.handleProjectMenu.bind(this)
        this.handleSlideAdd = this.handleSlideAdd.bind(this)
        this.handleSlideRemove = this.handleSlideRemove.bind(this)
        this.handleBgChange = this.handleBgChange.bind(this)
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
        return this.state.slides.find(x => x.id == id)
    }

    _currentBg(id) {
        let slide = this.state.slides.find(slide => slide.id == id)
        const bg = slide.bgImg
        return this.bgImages.get(bg)
    }

    handleInputChange(type, val) {
        const newEl = Object.assign({}, this.state.currentEl)
        const newSlide = Object.assign({}, this.state.currentSlide)
        if (!Array.isArray(type)) {
            newEl[type] = val
        } else {
            newEl[type[0]][type[1]] = val
        }
        let index = this.state.currentSlide.elements.indexOf(this.state.currentEl)
        newSlide.elements[index] = newEl
        this.setState({
            currentEl: newEl,
            currentSlide: newSlide
        })
    }

    handleBgChange(name) {
        const newSlide = Object.assign({}, this.state.currentSlide)
        let newBg = this.state.currentBg
        for (const img of this.bgImages.values()) {
            if (img.bgName == name) {
                newBg = img
            }
        }
        const newSlides = this.state.slides
        newSlide.bgImg = name
        newSlides[this.state.currentSlideID] = newSlide
        this.setState({
            currentSlide: newSlide,
            currentBg: newBg,
            slides: newSlides
        })
    }

    handleProjectMenu(type) {
        switch (type) {
            case "open":
                this.props.loadFile()
                break;
            case "save":
                this.props.saveFile(this.proj)
                break;
            case "close":
                this.props.closeFile()
                break;
            case "blank":
                this.props.blankFile()
                break;
            }
    }

    handleSlideRemove() {
        let newID = 0
        let newSlide = Object.assign({}, blankSlide)
        let newSlides = this.state.slides
        let indexToDelete = this.state.slides.findIndex(slide => slide.id == this.state.currentSlideID)
        newSlides.splice(indexToDelete, 1)
        if (newSlides.length) {
            if (indexToDelete == 0) {
                newID = this.state.slides[0].id
                newSlide = this.state.slides[0]
            } else {
                newID = newSlides[indexToDelete-1].id
                newSlide = this.state.slides.find(x => x.id == newID)
            }
        }
        let newBg = newSlide.bgImg ? this._currentBg(newSlide.id) : null
        this.setState({
            currentSlideID: newID,
            currentSlide: newSlide,
            currentBg: newBg,
            currentEl: defaultEl,
            slides: newSlides
        })
    }

    handleSlideAdd() {
        let newSlide = Object.assign({}, blankSlide)
        let newID = this.state.idCount
        let newSlides = this.state.slides
        newSlide.id = newID
        newSlide.name += newID+1
        newSlides.push(newSlide)
        this.setState({
            currentSlideID: newID,
            currentSlide: newSlide,
            currentBg: null,
            currentEl: defaultEl,
            slides: newSlides,
            idCount: this.state.idCount+1
        })
    }

    render() {
        return <>
            <Tools name={this.name} handleProjectMenu={this.handleProjectMenu}/>
            <Canvas
                bgImg={this.state.currentBg}
                slide={this.state.currentSlide}
                resolution={this.resolution}
            />
            <SlideList
                slides={this.state.slides}
                currentSlideID={this.state.currentSlideID}
                slideNameClickHandler={this.slideNameClickHandler}
                handleSlideAdd={this.handleSlideAdd}
                handleSlideRemove={this.handleSlideRemove}
            />
            <Timeline
                slide={this.state.currentSlide}
                currentEl={this.state.currentEl}
                elementClickHandler={this.elementClickHandler}
            />
            <Tabs
                handleBgChange={this.handleBgChange}
                handleInputChange={this.handleInputChange}
                bgList={this.state.bgList}
                imgList={this.state.imgList}
                currentEl={this.state.currentEl}
            />
        </>
    }
}

export default App
