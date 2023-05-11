import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { AppComponent } from "./app.component";
import { Client1Component } from "./client-1/client-1.component";
import { Client2Component } from "./client-2/client-2.component";
import { MySelectorComponent, OptionDirective, SelectedDirective } from "./my-selector/my-selector.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    FontAwesomeModule,
  ],
  declarations: [
    AppComponent,
    MySelectorComponent,
    Client1Component,
    Client2Component,
    SelectedDirective,
    OptionDirective
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
