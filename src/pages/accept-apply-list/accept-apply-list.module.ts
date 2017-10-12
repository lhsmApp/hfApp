import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcceptApplyListPage } from './accept-apply-list';
//import { TabAcceptDirective } from "../../directive/";

@NgModule({
  declarations: [
    AcceptApplyListPage,
    //TabAcceptDirective
  ],
  imports: [
    IonicPageModule.forChild(AcceptApplyListPage),
  ],
})
export class AcceptApplyListPageModule {
	
}
