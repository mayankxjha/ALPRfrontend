import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";


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
  ngOnInit() {
    this.inputTag.nativeElement.onchange = () => {
      this.imgTag.nativeElement.src = URL.createObjectURL(this.inputTag.nativeElement.files[0])
    }
  }
}
