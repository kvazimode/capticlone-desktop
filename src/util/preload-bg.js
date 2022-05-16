const preloadBg = (proj, projectPath) => {
    return new Promise((res, rej) => {
        const preloaded = []
        proj.slides.map(slide => {
            if (slide.bgImg == null) return
            const img = new Image()
            img.src = `${projectPath}/${slide.bgImg}`
            img.slideID = slide.id
            preloaded.push(img)
        })
        console.log(preloaded)
        res(preloaded)
    })
}

export default preloadBg
