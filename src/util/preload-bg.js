const preloadBg = (bgs, projectPath) => {
    return new Promise((res, rej) => {
        const preloaded = new Map()
        bgs.map(bgName => {
            const img = new Image()
            img.bgName = bgName
            img.src = `${projectPath}/${bgName}`
            preloaded.set(bgName, img)
        })
        res(preloaded)
    })
}

export default preloadBg
