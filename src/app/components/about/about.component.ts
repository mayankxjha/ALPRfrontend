import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Tile} from "../../shared/tile.model";
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('divAnim', [
      state('inBounds', style({opacity: 1, scale: 1})),
      state('outOfBounds', style({opacity: 0, scale: 0.2, transform: 'translateZ(-500px)'})),
      transition('outOfBounds <=> inBounds', [
        animate('{{time}}ms ease-in', keyframes([
          style({opacity: 0.2, scale: 0.2}),
          style({opacity: 0.4, scale: 0.4}),
          style({opacity: 0.6, scale: 0.6}),
          style({opacity: 0.8, scale: 0.8}),
          style({opacity: 1, scale: 1}),
        ]))])
    ])]
})
export class AboutComponent implements OnInit {
  @ViewChild('canvas', {static: true}) canvasMain: ElementRef<HTMLCanvasElement>;
  tiles: Tile[] = [
    {text: 'How it works?', cols: 3, rows: 4, color: 'lightblue'},
    {text: 'Applications', cols: 1, rows: 4, color: 'lightgreen'},
    {text: 'Privacy Concerns', cols: 3, rows: 4, color: 'lightpink'},
    {text: 'Accuracy', cols: 1, rows: 4, color: '#DDBDF1'},
  ];
  animationConfig = {
    value: 'outOfBounds', params: {
      time: Math.floor(Math.random() * 1000) + 200,
    }
  }
  descText: {} = {
    'How it works?': 'A camera captures an image of a vehicle\'s license plate as it passes by.\n' +
      '\n' +
      'The ALPR software analyzes the image and identifies the characters on the license plate using optical character recognition (OCR) technology.\n' +
      '\n' +
      'The software then compares the license plate number against a database of known or suspected vehicles, such as stolen vehicles or those associated with criminal activity.\n' +
      '\n' +
      'If there is a match, the ALPR system can alert law enforcement or parking enforcement officers to take action. Some ALPR systems also use additional cameras to capture images of the vehicle and its occupants, which can be used for further investigation or evidence gathering.\n' +
      '\n' +
      'It\'s worth noting that ALPR technology has raised concerns about privacy and civil liberties, as the capture and storage of license plate data can be used to track individuals\' movements and activities. As a result, there are often regulations in place to govern the use and storage of ALPR data.',
    'Applications': ['Law Enforcement', 'Parking management', 'Toll collection', 'Border control', 'Vehicle tracking', 'Security'],
    'Privacy Concerns': 'Surveillance and tracking: ALPR technology can be used to track the movement of vehicles and individuals. This can raise concerns about government or corporate surveillance and the potential for abuse.\n' +
      '\n' +
      'Data retention: ALPR systems can collect and store large amounts of data, including license plate images, timestamps, and location information. This data can be used to build a detailed history of a person\'s movements, which can raise concerns about privacy and data security.\n' +
      '\n' +
      'False positives and misidentification: ALPR systems are not always accurate, and false positives and misidentification can occur. This can lead to innocent people being wrongly flagged as suspects or criminals.\n' +
      '\n' +
      'Sharing of data: ALPR data can be shared among different agencies and organizations, including law enforcement, parking authorities, and toll collection companies. This can raise concerns about data sharing and the potential for misuse or abuse.\n' +
      '\n' +
      'Lack of transparency: ALPR technology is often used without public knowledge or consent. This can raise concerns about transparency and accountability.\n' +
      '\n',
    'Accuracy': 'The accuracy of ALPR can vary depending on several factors such as the quality of the camera, lighting conditions, speed of the moving vehicle, and the accuracy of the software used. Generally, when conditions are optimal, ALPR can have a high accuracy rate of 95% or more.'
  }

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

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

// Variables
    let randomColors = colorsWall[randomIntFromRange(0, 30)];
    let background = randomColor(randomColors);
    const mouse = {
      x: window.innerWidth / 2 + 200,
      y: window.innerHeight / 2 + 200
    };

// Event Listeners
    addEventListener("mousemove", event => {
      mouse.x = event.clientX + 200;
      mouse.y = event.clientY + 200;
    });

    addEventListener("mousedown", () => {
      randomColors = colorsWall[randomIntFromRange(0, 30)];
      particles.forEach(particle => {
        particle.color = randomColor(randomColors);
      });

      background = randomColor(randomColors);
    });

    addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

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
      c.fillStyle = background;
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
    setTimeout(() => {
      this.animationConfig = {value: 'inBounds', params: {time: 750}}
    }, 10)
    this.wallPMaker()
  }
}
