import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleApprovalListPage } from './schedule-approval-list';

@NgModule({
  declarations: [
    ScheduleApprovalListPage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleApprovalListPage),
  ],
})
export class ScheduleApprovalListPageModule {}
