import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleManageInfoPage } from './schedule-manage-info';

@NgModule({
  declarations: [
    ScheduleManageInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleManageInfoPage),
  ],
})
export class ScheduleManageInfoPageModule {}
