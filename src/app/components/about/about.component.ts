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
export class AboutComponent implements OnInit{

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
  ngOnInit() {
    setTimeout(() => {
      this.animationConfig = {value: 'inBounds', params: {time: 750}}
    }, 10)
  }
}
