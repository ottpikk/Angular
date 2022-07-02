import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sda-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent {
  stringVariable: string = 'this is amazing';
  numberVariable: number = 10;
  booleanVariable: boolean = true;
  arrayOfStrings: string[] = ['a', 'b', 'c'];
  arrayOfString2: Array<string> = ['a', 'b', 'c'];
  variableAsNull: null = null;
  variableAsUndefined: undefined = undefined;
  differentStringInit: string = `this isa a string with a: ${this.stringVariable}`;

  someVariable: any; // better to use any type than any
  someVariable2: unknown; // better to use unknown type than any

  arrayOfUnknown: Array<unknown> = [1, 'a', true];
  arrayOfMultipleTypes: Array<string | number | boolean> = [1, 'a', true];
  objectVariable: object = { name: 'John', age: 30 }; // object type is very general
  objectVariable2: object = { name: 'John', age: 30, address: { street: 'street1', city: 'city1' } }; // object type is very general
  objectVariableWithInterface: { breed: string, name: string } = { breed: 'labrador', name: 'John' };

  objectVariableWithInterface2: Dog = { breed: 'labrador', name: 'John' };
  variable = function () {
    return 'test';
  }
  variable2 = () => { };
  variable3 = () => 'test';
  simpleFunction(): void {
    console.log('simple function');
  }
  addTwoNumbers(a: number, b: number): number {
    return a + b;
  }


}

interface Dog {
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

class VideoGame {
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


