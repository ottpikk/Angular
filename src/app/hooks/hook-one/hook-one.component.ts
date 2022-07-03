import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sda-hook-one',
  templateUrl: './hook-one.component.html',
  styleUrls: ['./hook-one.component.scss']
})
export class HookOneComponent implements OnInit {

  @Input() myInput: string;
  constructor() {
    console.log(`constructor input value is: ${this.myInput}`);
  }
  ngOnChanges() {
    console.log(`ngOnChanges input value is: ${this.myInput}`);
  }
  ngOnInit() {
    console.log(`ngOnInit input value is: ${this.myInput}`);
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.warn('=============================');
  }

}
