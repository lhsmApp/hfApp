import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferFundsQueryListPage } from './transfer-funds-query-list';

@NgModule({
  declarations: [
    TransferFundsQueryListPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferFundsQueryListPage),
  ],
})
export class TransferFundsQueryListPageModule {}
