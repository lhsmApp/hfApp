import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferFundsApprovalListPage } from './transfer-funds-approval-list';

@NgModule({
  declarations: [
    TransferFundsApprovalListPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferFundsApprovalListPage),
  ],
})
export class TransferFundsApprovalListPageModule {}
