class TextBox {
  constructor(params) {
    this.fontSize = parseInt(params.fontSize)
    this.font = `${this.fontSize}px ${params.font}`
    this.bgFill = params.bgFill
    this.txtFill = params.txtFill
    this.text = params.text
    this.order = params.order
    this.position = params.position
  }

  draw(ctx) {
    ctx.font = this.font
    ctx.textBaseline = `bottom`
    const textSize = ctx.measureText(this.text)
    ctx.fillStyle = this.bgFill
    ctx.fillRect(this.position.x, this.position.y, textSize.width + this.fontSize, this.fontSize + this.fontSize/2)
    ctx.fillStyle = this.txtFill
    ctx.fillText(this.text, this.position.x + this.fontSize/2, this.position.y + this.fontSize + this.fontSize/3)
  }
}

export default TextBox
