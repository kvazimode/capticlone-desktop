import React, { useRef, useEffect } from 'react'

export default function Canvas(props) {
  const bgImg = new Image()
  bgImg.src = `./img/${props.bgImg}`
  const canvasRef = useRef(null)

  function drawBg(ctx) {
    ctx.drawImage(bgImg, 0, 0, 1280, 720)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext(`2d`)
    drawBg(ctx)
  }, [drawBg])

  return <>
    <div className="panel panel-canvas">
      <canvas ref={canvasRef} className="canvas" width="1280" height="720"></canvas>
    </div>
    </>
}
