import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";
import {SmolPart} from "../../shared/smolPart.model";


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  animations: [trigger('divState', [
    state('neutral', style({
      'background-color': 'black'
    })),
    state('Glioma', style({
      'background-color': 'black',
      'transform': 'translateX(-500px)',
    })),
    state('Meningioma', style({
      'background-color': 'black',
      'transform': 'translateX(-500px)',
    })),
    state('Pituitary', style({
      'background-color': 'black',
      'transform': 'translateX(-500px)',
    })),
    state('No Tumour', style({
      'background-color': 'black',
      'transform': 'translateX(-500px)',
    })),
    transition('neutral <=> *', animate(700))
  ]),
    trigger('divStage', [
      state('needed', style(
        {'transform': 'translate(200px,0px)', 'opacity': '1'})),
      state('notNeeded', style(
        {'transform': 'translate(200px, -500px)', 'opacity': '0'})),
      transition('notNeeded <=> needed', animate(1000))])]
})
export class UploadComponent implements OnInit {
  @ViewChild('part2', {static:true}) canvas: ElementRef<HTMLCanvasElement>
  @ViewChild('imgTag', {static: true}) imgTag: ElementRef<HTMLImageElement>;
  @ViewChild('inputTag', {static: true}) inputTag: ElementRef<HTMLInputElement>;
  divStage = 'notNeeded'
  divState = 'neutral'

  reset(){
    this.divStage = 'notNeeded'
    this.divState = 'neutral'
  }
  dummy(){
    this.divStage = 'needed'
    this.divState = 'Glioma'
  }
  BGCustom(){
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
    this.BGCustom()
    this.inputTag.nativeElement.onchange = () => {
      this.imgTag.nativeElement.src = URL.createObjectURL(this.inputTag.nativeElement.files[0])
    }
  }
}
