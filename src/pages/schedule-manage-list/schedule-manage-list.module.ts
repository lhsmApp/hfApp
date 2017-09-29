import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleManageListPage } from './schedule-manage-list';

@NgModule({
  declarations: [
    ScheduleManageListPage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleManageListPage),
  ],
})
export class ScheduleManageListPageModule {}
