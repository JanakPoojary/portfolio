import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: string = "I'm a software developer with 1.5+ year of experience in full stack web development. I am currently working with frameworks like Asp.net Core and Angular. I have also worked with machine learning library like Tensorflow.js on real world application. I’m also familiar with Node.js, Express.js, JavaScript, HTML, CSS, Python, jQuery, Postgres, SQL but I’m always adding new skills to my repertoire. I’m eager to meet other software engineers. Let's connect!";
  constructor() {
  }

  ngOnInit(): void {
  }

}
