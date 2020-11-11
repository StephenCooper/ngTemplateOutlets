import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { AppComponent } from "./app.component";
import { Client1Component } from "./client-1/client-1.component";
import { Client2Component } from "./client-2/client-2.component";
import { MySelectorComponent } from "./my-selector/my-selector.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    AngularFontAwesomeModule,
  ],
  declarations: [
    AppComponent,
    MySelectorComponent,
    Client1Component,
    Client2Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
