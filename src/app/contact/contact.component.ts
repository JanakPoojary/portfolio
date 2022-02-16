import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts = [
    { type: "LinkedIn", contactUrl: "", logoUrl: "" },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
