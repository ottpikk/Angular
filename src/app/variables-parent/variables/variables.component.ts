import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sda-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent {
  @Input() exposedVariable: string = 'Hello from Child';
  @Output() myEvent = new EventEmitter<string>();

  stringVariable: string = 'this is amazing';
  numberVariable: number = Number('123');
  booleanVariable: boolean = true;
  arrayOfStringI: string[] = ['a', 'b', 'c'];
  arrayOfStringII: Array<string> = ['one', 'two', 'three'];
  variableAsNull: null = null; // this is not a mistake, it is a valid value but doesn't make sens to give it null type
  variableAsUndefined: undefined = undefined; // this is not a mistake, it is a valid value but doesn't make sens to give it undefined type
  differentStringInit: string = `this is a string which says:  ${this.stringVariable}`;

  someVariable: any; // better to use any type than any
  someVariable2: unknown; // better to use unknown type than any

  arrayOfUnknown: Array<unknown> = [1, 'two', true];
  arrayOfMultipleTypes: Array<string | number | boolean> = ['string', 123, true];
  objectVariable: object = {name: 'John', age: 30}; // object type is very general, it can be any type of object
  objectVariable2: object = {name: 'John', age: 30, address: {street: 'street1', city: 'city1'}}; // object type is very general, it can be any type of object
  objectVariableWithInterfaceI: {breed: string, name: string} = {breed: 'labrador', name: 'Rex'}; 
  objectVariableWithInterfaceIDif: {[key: string]: string} = {breed: 'labrador', name: 'Rex'}; 
  objectVariableWithInterfaceII: Dog = {breed: 'labrador', name: 'Rex'};

  assignValueFromFunction: number = this.addTwoNumbers(1, 2); // value is 3
  variableFromEnum: string = Direction.N;
  variable = () => {};
  private privateVariable: string = 'privateVariable'; // can't be used in HTML file
  callEventEmitter(): void {
    this.myEvent.emit('Hello from Child eventEmitter');
  }

  simpleFunction(): void {
    console.log('simpleFunction');
  }


  addTwoNumbers(a: number, b: number): number {
    const x = a; // cannot be changed because it's a const
    let y = 0;
    if (b) {
      y = b;
    }
    return x + y;
  }
}

export interface Dog {
  breed: string;
  name: string;
  age?: number; // optional property
}

enum Direction {
  N = 'North',
  E = 'East',
  S = 'South',
  W = 'West'
}

class Video {
  title: string;
  creator: string;
  duration: number;
  constructor(title: string, creator: string, duration: number) {
    this.title = title;
    this.creator = creator;
    this.duration = duration;
  }
}

class Audio {
  title: string;
  creator: string;
  duration: number;
  constructor(title: string, creator: string, duration: number) {
    this.title = title;
    this.creator = creator;
    this.duration = duration;
  }
}

class Post<T> {
  content: T;
} 

const audioPost: Post<Audio> = new Post<Audio>();