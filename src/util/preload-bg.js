const preloadBg = (proj) => {
    return new Promise((res, rej) => {
        const preloaded = []
        proj.slides.map(slide => {
            const img = new Image()
            img.src = `./img/${slide.bgImg}`
            img.slideID = slide.id
            preloaded.push(img)
        })
        res(preloaded)
    })
}

export default preloadBg
