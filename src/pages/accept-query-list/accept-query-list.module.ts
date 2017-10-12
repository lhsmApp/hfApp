import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcceptQueryListPage } from './accept-query-list';
//import { TabAcceptDirective } from "../../directive/";

@NgModule({
  declarations: [
    AcceptQueryListPage,
    //TabAcceptDirective
  ],
  imports: [
    IonicPageModule.forChild(AcceptQueryListPage),
  ],
})
export class AcceptQueryListPageModule {}
