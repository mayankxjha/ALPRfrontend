export class ParticleS {
  size = Math.random() * 5 + 1;
  speedY = Math.random() * 3 - 1.5;
  speedX = Math.random() * 3 - 1.5;
  constructor(public x, public y, public color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  updateS() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.1) this.size -= 0.1;
  }

  drawS(c) {
    c.fillStyle = this.color
    c.strokeStyle = this.color
    c.lineWidth = 2
    c.beginPath()
    c.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    c.closePath()
    c.fill()
    c.stroke();
  }
}
