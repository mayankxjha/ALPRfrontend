export class SmolPart {
  public x;
  public y;
  size = Math.random() * 5 + 1;
  speedX = Math.random() * 3 - 1.5;
  speedY = Math.random() * 3 - 1.5;
  color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  public canvas
  constructor(canvas) {
    this.canvas = canvas
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > 0.2) this.size -= 0.1;
    if (this.x < 0 || this.x > this.canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > this.canvas.height) this.speedY *= -1;
  }

  draw() {
    const ctx = this.canvas.getContext('2d')
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}
