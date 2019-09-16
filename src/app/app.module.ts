import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { AngularFontAwesomeModule } from "angular-font-awesome";

import { AppComponent } from "./app.component";
import { MySelectorComponent } from "./my-selector/my-selector.component";
import { Client1Component } from "./client-1/client-1.component";
import { Client2Component } from "./client-2/client-2.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    AngularFontAwesomeModule
  ],
  declarations: [
    AppComponent,
    MySelectorComponent,
    Client1Component,
    Client2Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
