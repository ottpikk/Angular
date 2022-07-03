import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sda-variables-parent-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent {
  @Input() exposedVariable: string = 'Hello from child';
  @Output() myEvent = new EventEmitter<string>(); //string, void, number, boolean, any, null, undefined
  title = 'javaremoteee15-first';

  stringVariable: string = 'this is amazing';
  numberVariable: number = 10;
  booleanVariable: boolean = true;
  arrayOfStrings: string[] = ['a', 'b', 'c'];
  arrayOfString2: Array<string | number> = ['a', 'b', 'c'];
  variableAsNull: null = null;
  variableAsUndefined: undefined = undefined;
  differentStringInit: string = `this isa a string with a: ${this.stringVariable}`;

  someVariable: any; // better to use any type than any
  someVariable2: unknown; // better to use unknown type than any

  arrayOfUnknown: Array<unknown> = [1, 'a', true];
  arrayOfMultipleTypes: Array<string | number | boolean> = [1, 'a', true];
  objectVariable: object = { name: 'John', age: 30 }; // object type is very general
  objectVariable2: object = { name: 'John', age: 30, address: { street: 'street1', city: 'city1' } }; // object type is very general
  objectVariableWithInterface: { breed: string, name: string } = { breed: 'labrador', name: 'Rex' };
  objectVariableWithInterfaceDif: {[key:string]: string} = { breed: 'labrador', name: 'Rex' };
  objectVariableWithInterface2: Dog = { breed: 'labrador', name: 'John' };

  assignValueFromFunction: number = this.addTwoNumbers(1, 2);
  variableFromEnum: string = Direction.N;
  private privateVariable: string = 'privateVariable'; // can't be used in HTML file

  variable = function () {
    return 'test';
  }
  variable2 = () => { };
  variable3 = () => 'test';
  simpleFunction(): void {
    console.log('simple function');
  }

  callEventEmitter(): void {
    this.myEvent.emit('Hello from Child event');
  }


  addTwoNumbers(a: number, b: number): number {
    return a + b;
  }


}

export interface Dog {
  breed: string;
  name: string;
  age?: number;
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


