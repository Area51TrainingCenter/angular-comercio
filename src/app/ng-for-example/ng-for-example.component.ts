import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html',
})
export class NgForExampleComponent implements OnInit {

  cities: string[];
  people: Object[];
  peopleByCity: Object[];

  constructor() { }

  ngOnInit() {
    this.cities = ['Lima', 'CDMX', 'Santiago', 'Berlín'];

    this.people = [
      { name: 'Visho', city: 'Lima', age: 25 },
      { name: 'Wilson', city: 'Berlin', age: 24 },
      { name: 'Edson', city: 'Santiago', age: 23 },
      { name: 'Shonatan', city: 'CDMX', age: 19 }
    ];

    this.peopleByCity = [
      {
        city: 'Berlin',
        people: [
          { name: 'Wilson', age: 24 },
          { name: 'Gemerson', age: 30 }
        ]
      }, {
        city: 'Lima',
        people: [
          { name: 'Visho', age: 25 },
          { name: 'Katia', age: 25 }
        ]
      }, {
        city: 'Londres',
        people: [
          { name: 'Jhon', age: 25 },
          { name: 'Cesar', age: 25 },
          { name: 'Oscar', age: 18 }
        ]
      }

    ]
  }

}
