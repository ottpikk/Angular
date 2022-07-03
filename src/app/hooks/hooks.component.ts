import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sda-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit {
  title = 'javaremoteee15-first';
  show: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
