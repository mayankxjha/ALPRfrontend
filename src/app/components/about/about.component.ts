import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Tile} from "../../shared/tile.model";
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('divAnim', [
      state('inBounds', style({opacity: 1, scale: 1})),
      state('outOfBounds', style({opacity: 0, scale: 0.2, transform: 'translateZ(-500px)'})),
      transition('outOfBounds => inBounds', [
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

  tiles: Tile[] = [
    {text: 'How it works?', cols: 4, rows: 3, color: ''},
    {text: 'Applications', cols: 1, rows: 4, color: ''},
    {text: 'Key Features', cols: 4, rows: 3, color: ''},
    {text: 'Accuracy', cols: 1, rows: 4, color: ''},
    {text: 'Uses', cols: 1, rows: 1, color: ''},
    {text: 'Privacy Concerns', cols: 1, rows: 1, color: ''},
  ];
  animationConfig = {
    value: 'outOfBounds', params: {
      time: 750,
    }
  }
  descText: {} = {
    'Privacy Concerns': ['Surveillance: ALPR technology can be used to track the movements of vehicles and individuals, even if they are not suspected of any wrongdoing. This can lead to a chilling effect on free speech and association, as people may avoid attending certain events or visiting certain locations out of fear of being tracked.',
      'Data retention: ALPR data is typically stored in a database, and there are concerns that this data could be used for purposes other than those for which it was collected. For example, law enforcement agencies could potentially use ALPR data to identify individuals who attended political rallies or protests.',
      'Data sharing: ALPR data can be shared between different law enforcement agencies, which can increase the risk of misuse or abuse of the data. There have been instances of ALPR data being shared with immigration authorities, for example, which can lead to targeting of immigrant communities.',
      'Inaccuracy: While ALPR technology has become increasingly accurate over time, there are still concerns about false positives and misidentification. This can lead to innocent individuals being mistakenly targeted for investigation or surveillance.',
      'Lack of transparency: There are concerns that ALPR systems are being deployed without adequate public oversight or transparency. This can make it difficult for individuals to know when and where they are being tracked, and for what purposes.'],
    'Uses': 'ALPR technology is used by law enforcement agencies for a variety of purposes, including tracking stolen vehicles, locating suspects in criminal investigations, enforcing parking regulations, and detecting unregistered or uninsured vehicles.',
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
    'Key Features': ['Enhanced security: ALPR can be used to identify vehicles that are involved in criminal activities or are suspected of being used in such activities.',
      'Improved traffic management: ALPR can help traffic authorities to monitor traffic flow and detect traffic violations, such as speeding or running red lights.',
      'Efficient parking management: ALPR can be used to automate parking management systems, making it easier for drivers to find available parking spaces and for parking operators to manage their operations more efficiently.',
      'Cost savings: By automating certain tasks, such as toll collection or parking management, ALPR can help reduce labor costs and improve operational efficiency.'],
    'Accuracy': 'The accuracy of ALPR can vary depending on several factors such as the quality of the camera, lighting conditions, speed of the moving vehicle, and the accuracy of the software used. Generally, when conditions are optimal, ALPR can have a high accuracy rate of 95% or more.'
  }

  scrollAnim() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // console.log(entry)
          entry.target.classList.add('follow-up-show')
          anime({
            targets: entry.target,
            translateX: ['-50%', '0%'],
            opacity: 1,
          })
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove('follow-up-show')
        }
      })
    })
    const gridTiles = document.querySelectorAll('.follow-up-hidden');
    gridTiles.forEach(el => observer.observe(el))
  }

  ngOnInit() {
    setTimeout(() => {
      this.scrollAnim()
      this.animationConfig = {value: 'inBounds', params: {time: 750}}
    }, 10)
  }
}
