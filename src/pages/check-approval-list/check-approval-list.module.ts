import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckApprovalListPage } from './check-approval-list';

@NgModule({
  declarations: [
    CheckApprovalListPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckApprovalListPage),
  ],
})
export class CheckApprovalListPageModule {}
