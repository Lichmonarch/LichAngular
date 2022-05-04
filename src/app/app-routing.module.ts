import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HardwareDetailsComponent} from "./hardware-details/hardware-details.component";
import {ListOfHardwareComponent} from "./list-of-hardware/list-of-hardware.component";

const routes: Routes = [
  { path: 'hardware', component: ListOfHardwareComponent },
  { path: 'hardware/:articleCode', component: HardwareDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
