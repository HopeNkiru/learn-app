import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './servers/server.component';
import { SubserverComponent } from './subserver/subserver.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SubserverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
