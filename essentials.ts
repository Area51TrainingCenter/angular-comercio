var fullName = 'Sergio Brito';

console.log(fullName);

function setName(name: string): void {
  fullName = name;
}

setName('Chicharito');

console.log(fullName);

class Person {
  //Properties
  name: string;
  lastName: string;
  age: number;

  //Methods
  greet() {
    console.log('Hola ' + this.name);
  }
}

class Team {
  player: Person;
}

var person: Person;

person = new Person();

var person: Person = new Person();
var team: Team = new Team();

team.player = new Person();

person.name = 'yacaFx';

person.greet();



var persons: Person[] = [new Person()]


class Report {
  data: string[];

  constructor(data: string[]) {
    this.data = data;
  }

  run() {
    this.data.forEach(function (line) {
      console.log(line)
    })
  }
}


var report: Report = new Report([
  'Primera línea',
  'Segunda línea',
  'Tercer línea'
]);


report.run();


class TabbedReport extends Report {
  headers: string[];

  constructor(headers: string[], values: string[]) {
    super(values)
    this.headers = headers;
  }

  run() {
    console.log(this.headers);
    super.run();
  }
}

var headers: string[] = ['Nombre'];
var data: string[] = ['Hugo', 'Paco', 'Luis'];

var tabbedReport: TabbedReport = new TabbedReport(headers, data);

tabbedReport.run();