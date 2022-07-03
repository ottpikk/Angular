import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sda-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  tabNo=0;
  constructor() { }

  ngOnInit(): void {
  }

}
