import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <app-client-1></app-client-1>
    <app-client-2></app-client-2>
  `,
  styles: [
    `
      :host {
        display: grid;
        grid-template-columns: auto auto;
      }

      app-client-1,
      app-client-2 {
        margin: 1rem;
      }
    `,
  ],
})
export class AppComponent {
  // Two clients sharing a select component but using different templates.
}
