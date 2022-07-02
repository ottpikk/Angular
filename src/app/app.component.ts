import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sda-root',
  templateUrl: './app.component.html',
  // template:
  //<button>Hello world</button>
  styleUrls: ['./app.component.scss']
  //styles: ['p{color: green}']
})
export class AppComponent implements OnInit {
  title = 'javaremoteee15-first';
  constructor() { }

  ngOnInit() {
    console.log('AppComponent.ngOnInit');
  }
}
