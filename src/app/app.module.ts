import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddSeverComponent } from './add-sever/add-sever.component';
import { ServerListComponent } from './server-list/server-list.component';
import { ClientItemComponent } from './client-item/client-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSeverComponent,
    ServerListComponent,
    ClientItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
