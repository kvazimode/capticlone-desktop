class TextBox {
  constructor(params) {
    this.font = `${params.fontSize} ${params.font}`
    this.bgFill = params.bgFill
    this.txtFill = params.txtFill
    this.text = params.text
    this.order = params.order
    this.position = params.position
    this.w = params.w
    this.h = params.h
    this.textPos = this.position.y + this.h/2 + parseInt(params.fontSize)/2
  }

  draw(ctx) {
    ctx.font = this.font
    ctx.fillStyle = this.bgFill
    ctx.fillRect(this.position.x, this.position.y, this.w, this.h)
    ctx.fillStyle = this.txtFill
    ctx.textBaseline = `bottom`
    ctx.fillText(this.text, this.position.x + 30, this.textPos)
  }
}

export default TextBox
