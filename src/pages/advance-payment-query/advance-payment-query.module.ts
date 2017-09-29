import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvancePaymentQueryPage } from './advance-payment-query';
//指令
import { TabDirective } from "../../directive/";

@NgModule({
  declarations: [
    AdvancePaymentQueryPage,
    TabDirective
  ],
  imports: [
    IonicPageModule.forChild(AdvancePaymentQueryPage),
  ],
})
export class AdvancePaymentQueryPageModule {}
