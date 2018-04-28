import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NewDirective } from './newDirective';
import { ThirdDirective } from './thirdDirective';

import { AppComponent } from './app.component';
import { FourthComponentComponent } from './fourth-component/fourth-component.component';


@NgModule({
  declarations: [
    AppComponent, NewDirective, ThirdDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
