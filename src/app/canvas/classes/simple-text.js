class SimpleText {
    constructor(params) {
      this.font = `${params.fontSize} ${params.font}`
      this.txtFill = params.txtFill
      this.text = params.text
      this.x = params.position.x
      this.y = params.position.y
      this.order = params.order
    }
  
    draw(ctx) {
      ctx.font = this.font
      ctx.fillStyle = this.txtFill
      ctx.fillText(this.text, this.x, this.y)
    }
  
  }

export default SimpleText
