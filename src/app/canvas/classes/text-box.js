class TextBox {
  constructor(params) {
    this.font = `${params.fontSize} ${params.font}`
    this.bgFill = params.bgFill
    this.txtFill = params.txtFill
    this.text = params.text
    this.order = params.order
  }

  draw(ctx) {
    ctx.font = this.font
    ctx.fillStyle = this.bgFill
    ctx.fillRect(400, 350, 200, 50)
    ctx.fillStyle = this.txtFill
    ctx.fillText(this.text, 430, 380)
  }
}

export default TextBox
