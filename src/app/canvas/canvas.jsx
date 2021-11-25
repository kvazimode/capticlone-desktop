import React, { useRef, useEffect } from 'react'
import Highlight from './classes/highlight.js'
import TextBox from './classes/text-box.js'
import SimpleText from './classes/simple-text.js'

export default function Canvas(props) {
  const canvasRef = useRef(null)
  const resolution = props.resolution

  let makeObject = (item) => {
    let obj = {}
    switch(item.type) {
        case `TextBox`:
            obj = new TextBox(item);
            break;
        case `SimpleText`:
            obj = new SimpleText(item);
            break;
        case `Highlight`:
            obj = new Highlight(item, resolution);
            break;
    }
    return obj
  }

  let composer = () => {
    let stack = []
    props.slide.elements.forEach(item => {
            stack.push(makeObject(item))
    })
    stack.sort((a, b) => b.order - a.order)
    return stack
  }

  function drawEl(ctx) {
    let stack = composer()
    stack.forEach(el => {
        el.draw(ctx)
    })
  }

  function drawBg(ctx) {
    if (props.bgImg) ctx.drawImage(props.bgImg, 0, 0, resolution.x, resolution.y)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext(`2d`)
    ctx.clearRect(0, 0, resolution.x, resolution.y)
    drawBg(ctx)
    drawEl(ctx)
  }, [props.slide])

  return <>
    <div className="panel panel-canvas">
      <canvas ref={canvasRef} className="canvas" width={resolution.x} height={resolution.y}></canvas>
    </div>
    </>
}
