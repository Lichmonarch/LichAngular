import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListOfHardwareComponent } from './list-of-hardware/list-of-hardware.component';
import { HardwareDetailsComponent } from './hardware-details/hardware-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    ListOfHardwareComponent,
    HardwareDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
