import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleManageItemPage } from './schedule-manage-item';

@NgModule({
  declarations: [
    ScheduleManageItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleManageItemPage),
  ],
})
export class ScheduleManageItemPageModule {}
