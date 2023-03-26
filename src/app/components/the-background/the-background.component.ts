import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as gsap from "gsap"

@Component({
  selector: 'app-the-background',
  templateUrl: './the-background.component.html',
  styleUrls: ['./the-background.component.css']
})
export class TheBackgroundComponent implements OnInit{
  @ViewChild('canvas', {static: true}) canvasMain: ElementRef<HTMLCanvasElement>;
  wallPMaker() {
    const colorsWall = [
      ["#ecd078", "#d95b43", "#c02942", "#542437", "#53777a"],
      ["#556270", "#4ecdc4", "#c7f464", "#ff6b6b", "#c44d58"],
      ["#e8ddcb", "#cdb380", "#036564", "#033649", "#031634"],
      ["#ffffff", "#cbe86b", "#f2e9e1", "#1c140d", "#cbe86b"],
      ["#efffcd", "#dce9be", "#555152", "#2e2633", "#99173c"],
      ["#00a8c6", "#40c0cb", "#f9f2e7", "#aee239", "#8fbe00"],
      ["#fad089", "#ff9c5b", "#f5634a", "#ed303c", "#3b8183"],
      ["#d1e751", "#ffffff", "#000000", "#4dbce9", "#26ade4"],
      ["#1b676b", "#519548", "#88c425", "#bef202", "#eafde6"],
      ["#bcbdac", "#cfbe27", "#f27435", "#f02475", "#3b2d38"],
      ["#2a044a", "#0b2e59", "#0d6759", "#7ab317", "#a0c55f"],
      ["#a3a948", "#edb92e", "#f85931", "#ce1836", "#009989"],
      ["#e8d5b7", "#0e2430", "#fc3a51", "#f5b349", "#e8d5b9"],
      ["#300030", "#480048", "#601848", "#c04848", "#f07241"],
      ["#3e4147", "#fffedf", "#dfba69", "#5a2e2e", "#2a2c31"],
      ["#fc354c", "#29221f", "#13747d", "#0abfbc", "#fcf7c5"],
      ["#1c2130", "#028f76", "#b3e099", "#ffeaad", "#d14334"],
      ["#1c0113", "#6b0103", "#a30006", "#c21a01", "#f03c02"],
      ["#000000", "#9f111b", "#b11623", "#292c37", "#cccccc"],
      ["#f6f6f6", "#e8e8e8", "#333333", "#990100", "#b90504"],
      ["#413d3d", "#040004", "#c8ff00", "#fa023c", "#4b000f"],
      ["#a8a7a7", "#cc527a", "#e8175d", "#474747", "#363636"],
      ["#f8edd1", "#d88a8a", "#474843", "#9d9d93", "#c5cfc6"],
      ["#4e4d4a", "#353432", "#94ba65", "#2790b0", "#2b4e72"],
      ["#0ca5b0", "#4e3f30", "#fefeeb", "#f8f4e4", "#a5b3aa"],
      ["#edf6ee", "#d1c089", "#b3204d", "#412e28", "#151101"],
      ["#fffbb7", "#a6f6af", "#66b6ab", "#5b7c8d", "#4f2958"],
      ["#ff003c", "#ff8a00", "#fabe28", "#88c100", "#00c176"],
      ["#30261c", "#403831", "#36544f", "#1f5f61", "#0b8185"],
      ["#d1313d", "#e5625c", "#f9bf76", "#8eb2c5", "#615375"],
      ["#aaff00", "#ffaa00", "#ff00aa", "#aa00ff", "#00aaff"]];


// Initial Setup
//     console.log(colorsWall.length)
    const canvas = this.canvasMain.nativeElement
    const c = this.canvasMain.nativeElement.getContext('2d');

    canvas.width = innerWidth;
    canvas.height = innerHeight;
    // canvas.style.width = '100%'
    // canvas.style.height = '100%'

// Variables
    let randomColors = colorsWall[randomIntFromRange(0, 30)];
    let background = randomColor(randomColors);
    const mouse = {
      x: innerWidth / 2 + 200,
      y: innerHeight / 2 + 200
    };

// Event Listeners
    addEventListener("mousemove", event => {
      mouse.x = event.clientX + 200;
      mouse.y = event.clientY + 200;
    });

    setInterval( () => {
      randomColors = colorsWall[randomIntFromRange(0, 30)];
      particles.forEach(particle => {
        particle.color = randomColor(randomColors);
      });
      background = randomColor(randomColors);
    }, 5000);

    addEventListener("resize", () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;

      init();
    });


    function randomIntFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function randomColor(colors) {
      return colors[Math.floor(Math.random() * colors.length)];
    }


// Objects
    function Particle(x, y, xDistance, yDistance, radius, color) {
      this.x = x;
      this.y = y;
      this.center = {x: x * Math.random(), y: y * Math.random()};
      this.distance = {x: x, y: y};
      this.originalRadius = radius;
      this.radius = radius;
      this.color = color;

      this.update = ticker => {
        this.draw();
        const mouseDistance = {
          x: mouse.x - this.x,
          y: mouse.y - this.y
        }
        const maxRadius = 13;


        this.x = this.center.x + Math.cos(ticker) * xDistance;
        this.y = this.center.y + Math.sin(ticker) * yDistance;

        if (mouse.x - this.x < 100 && mouse.x - this.x > -100 && mouse.y - this.y < 100 && mouse.y - this.y > -100) {
          if (this.radius < maxRadius) this.radius += 1;
        } else if (this.radius > this.originalRadius) {
          this.radius -= 0.2;
          this.radius = Math.max(1, this.radius);
        }
      };

      this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
      };
    }


// Implementation
    let particles;

    function init() {
      particles = [];
      for (let i = 0; i < 800; i++) {
        const distance = randomIntFromRange(80, 200);
        const radius = Math.random() * 5;
        particles.push(new Particle(canvas.width + 400, canvas.height + 400, distance, distance, radius, randomColor(colorsWall[12])));
      }
    }
// Animation Loop
    let ticker = 0;
    function animate5() {
      requestAnimationFrame(animate5);
      gsap.TweenLite.to(c, 2, {fillStyle: background});
      // c.fillStyle = background;
      c.fillRect(0, 0, canvas.width, canvas.height);

      c.save();
      c.translate(-200, -200);
      particles.forEach(particle => {
        particle.update(ticker);
      });
      c.restore();

      ticker += 0.02;
    }

    init();
    animate5();
  }


  ngOnInit() {
    this.wallPMaker()
  }

}
