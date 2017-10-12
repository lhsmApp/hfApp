import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcceptApprovalListPage } from './accept-approval-list';
//import { TabAcceptDirective } from "../../directive/";

@NgModule({
  declarations: [
    AcceptApprovalListPage,
    //TabAcceptDirective
  ],
  imports: [
    IonicPageModule.forChild(AcceptApprovalListPage),
  ],
})
export class AcceptApprovalListPageModule {}
