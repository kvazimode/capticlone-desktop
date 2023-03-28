

const calculateDuration = (slide) => {
    let end = 0
    for (let el of slide.elements) {
        const elEnd = el.duration + el.start
        if (elEnd > end) {
            end = elEnd
        }
    }
    return end
}

const prepareData = (proj) => {
    const slides = proj.slides
    let stop = 0
    let bgs = []
    let elements = []
    for (let slide of slides) {
        const duration = calculateDuration(slide)
        if (slide.bgImg) {
            const bg = {
                start: stop,
                end: stop + duration,
                link: `./img/${slide.bgImg}`
            }
            bgs.push(bg)
        }
        const modifiedElements = slide.elements.map(el => {
            let newEl = structuredClone(el)
            newEl.start += stop
            newEl.end = newEl.start + newEl.duration
            return newEl
        })
        elements = [...elements, ...modifiedElements]
        stop += duration
    }
    return [bgs, elements]
}

export default prepareData
