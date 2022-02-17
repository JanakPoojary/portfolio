import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts = [
    { type: "LinkedIn", url: "https://www.linkedin.com/in/janakaraj-poojary-5685b4168", userName: "Janakaraj Poojary", logoUrl: "" },
    { type: "Github", url: "https://github.com/JanakPoojary", userName: "JanakPoojary", logoUrl: "" },
    { type: "Mail", url: "", userName: "janakrajpoojari@gmail.com", logoUrl: "" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
