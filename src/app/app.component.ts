import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Two clients sharing a select component but using different templates.

  function appendLatin(shark){
    const latin = this.latinNames[shark];  
    return `${shark} (${latin})` ;
  }
}
