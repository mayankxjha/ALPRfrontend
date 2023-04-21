import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {gsap} from 'gsap';
import {MatToolbar} from "@angular/material/toolbar";
import {SmolPart} from "./shared/smolPart.model";
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('TB', {static: true}) toolB: ElementRef<MatToolbar>
  @ViewChild('part', {static: true}) canvas: ElementRef<HTMLCanvasElement>

  drawerCustom() {
    const canvas = this.canvas.nativeElement;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray = [];

    function handleParticles() {
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        if (particlesArray[i].size <= 0.2) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
    }

    function createParticles() {
      if (particlesArray.length < 100) {
        particlesArray.push(new SmolPart(canvas));
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      createParticles();
      requestAnimationFrame(animateParticles);
    }

    animateParticles();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  ngOnInit() {
    this.drawerCustom()
    console.log(window.screen.availWidth, window.screen.availHeight)
    setTimeout(() => {
      // const tl = gsap.timeline({defaults: {duration: 1}})
      // tl.fromTo("mat-toolbar", {y: "-100%"}, {y: "0%"});
      anime({
        targets: '.toolBar',
        translateY: ['-100%', '0%'],
        duration: 1300
      })
    }, 10)
  }
}
