import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {gsap} from 'gsap';
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('TB', {static: true}) toolB: ElementRef<MatToolbar>

  ngOnInit() {
    setTimeout(() => {
      console.log(this.toolB)
      const tl = gsap.timeline({defaults: {duration: 1}})
      tl.fromTo("mat-toolbar", {x: "-100%"}, {x: "0%"});
    }, 10)
  }
}
