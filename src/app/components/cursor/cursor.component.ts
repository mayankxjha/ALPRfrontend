import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ParticleS} from "../../shared/particleS.model";

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.css']
})
export class CursorComponent implements OnInit{
  @ViewChild('canvas2', {static: true}) canvasMain: ElementRef<HTMLCanvasElement>;
  cursorMaker() {
    const canvas = this.canvasMain.nativeElement
    const c = this.canvasMain.nativeElement.getContext('2d');

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    const particlesS = [];

    function handleParticles() {

      for (let i = 0; i < particlesS.length; i++) {

        particlesS[i].updateS();

        particlesS[i].drawS(c);

        if (particlesS[i].size <= 0.1) {

          particlesS.splice(i, 1);

          i--;

        }
      }
    }

    function getColor(x) {

      const hue = (x / canvas.width) * 360;

      return `hsla(${hue}, 100%, 50%, 1)`;

    }

    function addParticle(e) {

      const posX = e.clientX || e.touches[0].clientX;

      const posY = e.clientY || e.touches[0].clientY;

      const color = getColor(posX);

      particlesS.push(new ParticleS(posX, posY, color));

    }

    canvas.addEventListener('mousemove', addParticle);

    canvas.addEventListener('touchstart', addParticle);

    canvas.addEventListener('touchmove', addParticle);

    function animate() {

      c.clearRect(0, 0, canvas.width, canvas.height);

      handleParticles();

      requestAnimationFrame(animate);

    }
    animate();
  }
  ngOnInit() {
    this.cursorMaker()
  }

}
