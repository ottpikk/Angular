import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sda-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {
  clumsyStyle = {
    color: 'red',
    'font-style': 'italic',
    fontSize: '20px'
  }
showStyle = false;


  simpleArray: Array<string> = ['one', 'two', 'three', 'four', 'five'];
  sampleObject: object = {name: 'John', surname: 'Doe'};

  moviesArray: Array<{name: string,
  department: string,
  manager: string,
  salary: number}> = [
    {
      name: 'Robin Hood',
      department: '',
      manager: null,
      salary: 200
    },
    {
      name: 'Arsene Wenger',
      department: 'Bar',
      manager: 'Friar Tuck',
      salary: 50
    },
    {
      name: 'Friar Tuck',
      department: 'Foo',
      manager: 'Robin Hood',
      salary: 100
    },
    {
      name: 'Little John',
      department: 'Foo',
      manager: 'Robin Hood',
      salary: 100
    },
    {
      name: 'Sam Allardyce',
      department: '',
      manager: null,
      salary: 250
    },
    {
      name: 'Dimi Berbatov',
      department: 'Foo',
      manager: 'Little John',
      salary: 50
    }
  ]

  moviesObject = {
    one: {
      name: 'Robin Hood',
      department: ' ',
      manager: null,
      salary: 200
    },
    two: {
      name: 'Arsene Wenger',
      department: 'Bar',
      manager: 'Friar Tuck',
      salary: 50
    },
    three: {
      name: 'Friar Tuck',
      department: 'Foo',
      manager: 'Robin Hood',
      salary: 100
    },
    four: {
      name: 'Little John',
      department: 'Foo',
      manager: 'Robin Hood',
      salary: 100
    },
    five: {
      name: 'Sam Allardyce',
      department: '',
      manager: null,
      salary: 250
    },
    six: {
      name: 'Dimi Berbatov',
      department: 'Foo',
      manager: 'Little John',
      salary: 50
    }
}

}
