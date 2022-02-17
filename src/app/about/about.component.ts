import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: string = "I'm a software developer with 1.5+ year of experience in full stack web development. I am currently working with frameworks like Asp.net Core and Angular. I have also worked with machine learning library like Tensorflow.js on real world application. I’m also familiar with Node.js, Express.js, JavaScript, HTML, CSS, Python, jQuery, Postgres, SQL but I’m always adding new skills to my repertoire. I’m eager to meet other software engineers. Let's connect!";
  name: string = "JANAK";
  currentScrollY: number;
  avatarInitHeight: number = 47;
  avatarHeight: number;
  stylee = {};
  constructor() {
    document.addEventListener('scroll', () => {
      this.currentScrollY = document.documentElement.scrollTop;
      this.avatarHeight = this.avatarInitHeight - (this.currentScrollY / 20);
      this.stylee = {
        'height': `clamp( 20rem, 45vw, ${this.avatarHeight}rem)`
      }
    })
  }

  ngOnInit(): void {
  }

}
