

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
        stop += duration
    }
    return bgs
}

export default prepareData
