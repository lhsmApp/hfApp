import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcceptQueryListPage } from './accept-query-list';

@NgModule({
  declarations: [
    AcceptQueryListPage,
  ],
  imports: [
    IonicPageModule.forChild(AcceptQueryListPage),
  ],
})
export class AcceptQueryListPageModule {}
