import React, {PureComponent} from 'react'
import Tools from './panels/tools/tools.jsx'
import Timeline from './panels/timeline/timeline.jsx'
import Tabs from './panels/params/tabs.jsx'
import SlideList from './panels/slide-list/slide-list.jsx'
import Canvas from './canvas/canvas.jsx'
import defaultEl from '../data/default-el.js'
import blankSlide from '../data/blank-slide.js'
import NewProjectDialog from '../app/panels/new-project-dialog.jsx'
import {simpleBlank} from '../data/simple-blank.js'
import {highlightBlank} from '../data/highlight-blank.js'
import {blockBlank} from '../data/text-box-blank.js'

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.proj = props.proj
        this.resolution = this.proj.resolution
        this.bgImages = new Map(props.bgImages)
        this.name = this.proj.name
        this.state = {
            bgList: this.props.backgrounds ? this.props.backgrounds : [],
            imgList: this.props.images ? this.props.images : [],
            elementList: this.proj.slides.length > 0 ? this.proj.slides[0].elements : [],
            currentSlideID: 0,
            slideName: this.proj.slides[0] ? this.proj.slides[0].name : '',
            scale: 1,
            currentBg: ((this.bgImages != undefined) && (this.proj.slides.length > 0)) ? this.bgImages.get(this.proj.slides[0].bgImg) : null,
            currentEl: {...defaultEl, position: {...defaultEl.position}},
            slides: [...this.proj.slides],
            idCount: this.proj.slides.length,
            showCreateDialog: false
        }
        this.slideNameClickHandler = this.slideNameClickHandler.bind(this)
        this.elementClickHandler = this.elementClickHandler.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleProjectMenu = this.handleProjectMenu.bind(this)
        this.handleSlideAdd = this.handleSlideAdd.bind(this)
        this.handleSlideRemove = this.handleSlideRemove.bind(this)
        this.handleBgChange = this.handleBgChange.bind(this)
        this.addBg = this.addBg.bind(this)
        this.handleClickElAdd = this.handleClickElAdd.bind(this)
        this.createNew = this.createNew.bind(this)
        this.resetDialog = this.resetDialog.bind(this)
    }

    slideNameClickHandler(id) {
        const newSlide = {
            id: this.state.currentSlideID,
            name: this.state.slideName,
            bgImg: this.state.currentBg ? this.state.currentBg.bgName : null,
            elements: [...this.state.elementList]
        }
        const modifiedSlides = this.state.slides.map(slide => {
            if (slide.id == this.state.currentSlideID) {
                return {...newSlide, elements: [...newSlide.elements]}
            }
            return slide

        })
        const nextSlide = this._currentSlide(id)
        const nextElementList = [...nextSlide.elements]
        this.setState({
            currentSlideID: id,
            slideName: nextSlide.name,
            currentBg: this._currentBg(id),
            currentEl: defaultEl,
            slides: modifiedSlides,
            elementList: nextElementList
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
        const newEl = {...this.state.currentEl, position: {...this.state.currentEl.position}}
        let elements = [...this.state.elementList]
        if (!Array.isArray(type)) {
            newEl[type] = val
        } else {
            newEl[type[0]][type[1]] = val
        }
        let index = this.state.elementList.indexOf(this.state.currentEl)
        elements[index] = newEl
        this.setState({
            currentEl: newEl,
            elementList: elements
        })
    }

    handleBgChange(bgName) {
        let newBg = this.state.currentBg
        for (const img of this.bgImages.values()) {
            if (img.bgName == bgName) {
                newBg = img
            }
        }
        const modifiedSlides = this.state.slides.map(slide => {
            if (slide.id == this.state.currentSlideID) {
                return {...slide, elements: [...slide.elements], bgImg: bgName}
            }
            return slide
        })
        this.setState({
            currentBg: newBg,
            slides: modifiedSlides
        })
    }

    gatherProj() {
        const currentSlide = {
            id: this.state.currentSlideID,
            name: this.state.slideName,
            bgImg: this.state.currentBg ? this.state.currentBg.bgName : null,
            elements: [...this.state.elementList]
        }
        const modifiedSlides = this.state.slides.map(slide => {
            if (slide.id == this.state.currentSlideID) {
                return {...currentSlide, elements: [...currentSlide.elements]}
            }
            return slide
        })
        return {
            name: this.name,
            resolution: {...this.resolution},
            slides: modifiedSlides
        }
    }

    addBg() {
        const proj = this.gatherProj()
        this.props.saveFile(proj)
        this.props.uploadBG()
    }

    handleProjectMenu(type) {
        switch (type) {
            case "open":
                this.props.loadFile()
                break;
            case "save":
                const proj = this.gatherProj()
                this.props.saveFileDialog(proj)
                break;
            case "save-project":
                const project = this.gatherProj()
                this.props.saveFile(project)
                this.props.saveProjectDialog(project)
                break;
            case "close":
                this.props.closeFile()
                break;
            case "blank":
                this.setState({showCreateDialog: true})
                break;
            case "export":
                const bgs = this.props.prepareData(this.gatherProj())
                console.log(bgs)
                break;
            }
    }

    createNew(projectName) {
        this.props.blankFile(projectName)
        this.setState({showCreateDialog: false})
    }

    resetDialog() {
        this.setState({showCreateDialog: false})
    }

    handleClickElAdd(type) {
        let elements = [...this.state.elementList]
        const newEl = Object.create(null)
        switch (type) {
            case "simple":
                Object.assign(newEl, simpleBlank)
                break;
            case "block":
                Object.assign(newEl, blockBlank)
                break;
            case "highlight":
                Object.assign(newEl, highlightBlank)
                break;
        }
        newEl.order = elements.length
        elements.push(newEl)
        this.setState({
            elementList: elements
        })
    }

    handleSlideRemove() {
        let newID = 0
        let newSlide = Object.assign({}, blankSlide)
        let newSlides = [...this.state.slides]
        let indexToDelete = this.state.slides.findIndex(slide => slide.id == this.state.currentSlideID)
        newSlides.splice(indexToDelete, 1)
        if (newSlides.length) {
            if (indexToDelete == 0) {
                newID = this.state.slides[0].id
                newSlide = {...this.state.slides[0], elements: [...this.state.slides[0].elements]}
            } else {
                newID = newSlides[indexToDelete-1].id
                newSlide = this.state.slides.find(x => x.id == newID)
            }
        }
        let newBg = newSlide.bgImg ? this._currentBg(newSlide.id) : null
        this.setState({
            currentSlideID: newID,
            currentBg: newBg,
            currentEl: defaultEl,
            slides: newSlides
        })
    }

    handleSlideAdd() {
        let newSlide = {...blankSlide, elements: [...blankSlide.elements]}
        let newID = this.state.idCount
        let newSlides = [...this.state.slides]
        newSlide.id = newID
        newSlide.name += newID+1
        newSlides.push(newSlide)
        this.setState({
            currentSlideID: newID,
            currentBg: null,
            currentEl: defaultEl,
            slideName: newSlide.name,
            slides: newSlides,
            idCount: this.state.idCount+1
        })
    }

    render() {
        return <>
            <Tools
                name={this.name}
                handleProjectMenu={this.handleProjectMenu}
                handleClickElAdd={this.handleClickElAdd}
            />
            <Canvas
                bgImg={this.state.currentBg}
                elements={this.state.elementList}
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
                elements={this.state.elementList}
                currentEl={this.state.currentEl}
                elementClickHandler={this.elementClickHandler}
            />
            <Tabs
                slideAmount={this.state.slides.length}
                handleBgChange={this.handleBgChange}
                handleInputChange={this.handleInputChange}
                addBg={this.addBg}
                bgList={this.state.bgList}
                imgList={this.state.imgList}
                currentEl={this.state.currentEl}
            />
            <NewProjectDialog showDialog={this.state.showCreateDialog} createNew={this.createNew} resetDialog={this.resetDialog}/>
        </>
    }
}

export default App
