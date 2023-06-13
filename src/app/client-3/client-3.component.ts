import { Component } from "@angular/core";


export interface Person {
  name: string;
}

@Component({
  selector: "app-client-3",
  templateUrl: "./client-3.component.html",
})
export class Client3Component {
  people: Person[] = [
    {
      name: "Bob",
    },
    {
      name: "John",
    },
    {
      name: "Claire",
    },
    {
      name: "Jo",
    },
  ];
}
